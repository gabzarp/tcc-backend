const Evaluation = require("../../models/EvaluationRanking/Evaluation");

const EvaluationController = {
  EvaluationsByMemberAndProject: async (ctx) => {
    try {
        const body = ctx.request.body;
        ctx.body = await Evaluation.find({project: body.project, member: body.member});
        ctx.status = 200;
        } catch (error) {
        ctx.body = error;
        ctx.status = 500;
        console.log(error);
        }
    },
};
module.exports = EvaluationController;
