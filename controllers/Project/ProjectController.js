const { create, createIndexes } = require('../../models/Project/Project');
const Project = require('../../models/Project/Project')
const Member = require('../../models/User/Member')
const {createBoard, inviteMember} = require('../Integrations/Trello')

module.exports = {
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
}

