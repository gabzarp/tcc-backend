const User = require("../../models/User/User");
const Project = require("../../models/Project/Project");
const {createBoard, inviteMember} = require('../Integrations/Trello')


const ProjectController = {
  associateUserWithProject: async (ctx) => {
    try {
      await User.updateOne({_id: ctx.request.body.userId },{ $push:{projects: ctx.request.body.projectId} });
      await Project.updateOne({_id: ctx.request.body.projectId },{ $push: { members: ctx.request.body.userId}, $pull: {invites: ctx.request.body.userId}, taken: true});

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
        console.log(project.members)
        let member = await Member.findOne({user: ctx.request.body.userId});
        project.members.push(member);
        project.save();
        
        member.user.projects.push(project);
        member.save();
        
        const board = await createBoard(project)
        inviteMember(board.sourceId, member.user.email)
        ctx.body = "Success";
        ctx.status = 200;
    } catch (error) {
        tx.body = error;
        ctx.status = 500;
        console.log(error)
    }
  }
};


module.exports = ProjectController

