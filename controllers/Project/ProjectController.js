const User = require("../../models/User/User");
const Member = require("../../models/User/Member");
const Project = require("../../models/Project/Project");
const {createBoard, inviteMember} = require('../Integrations/Trello');
const { findById } = require("../../models/User/User");


const ProjectController = {
  associateUserWithProject: async (ctx) => {
    try {
      const member = await Member.findOne({user: ctx.request.body.userId});
      const user = await User.findById(ctx.request.body.userId);
      user.projects.push(ctx.request.body.projectId);
      user.save();
      const project = await Project.findById(ctx.request.body.projectId);
      project.members.push(member._id);
      project.invites.pull(member._id)
      project.taken = true;
      project.save();
      console.log(user)
      project.externalSources.forEach(external => {
        if(external.name == 'Trello'){
          inviteMember(external.sourceId, user.email);
        }
      });
      ctx.body = true;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
      console.log(error);
    }
  },
  inviteProject: async (ctx) => {
    try {
      await Project.updateOne({_id: ctx.request.body.projectId },{ $push: { invites: ctx.request.body.userId}});

      ctx.body = true;
      ctx.status = 200;
    } catch (error) {
      ctx.body = error;
      ctx.status = 500;
      console.log(error);
    }
  },
  projectStart: async (ctx)=>{
    try {
        let project = await Project.findOne({_id: ctx.request.body.projectId});
        
        let member = await Member.findOne({user: ctx.request.body.userId});
        let user = await User.findOne({_id: ctx.request.body.userId});
        await project.members.push(member);
        project.taken = true;
        project.save();
        
        await user.projects.push(project);
        user.save();
        const board = await createBoard(project)
        inviteMember(board.sourceId, user.email)
        ctx.body = "Success";
        ctx.status = 200;
    } catch (error) {
        ctx.body = error;
        ctx.status = 500;
        console.log(error)
    }
  }
};


module.exports = ProjectController

