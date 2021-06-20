const Message = require("../../models/Project/Message");
const User = require("../../models/User/User");


const getMessageByChat = async (ctx) => {
  let messages = await Message.find({chat: ctx.request.params.id})
  console.log(messages)
  ctx.body = messages;
}

module.exports ={getMessageByChat};