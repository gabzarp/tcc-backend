const axios = require('axios');
const ExternalSources = require('../../models/Project/ExternalSources');
module.exports = {
    createBoard: async (project)=>{
        try {
            const trelloProject = await axios.post(`https://api.trello.com/1/boards/?key=${process.env.TRELLO_API}&token=${process.env.TRELLO_TOKEN}&name=${project.name}`);
            const trelloExternalSources = new ExternalSources({name: 'Trello', link: trelloProject.data.url, sourceId: trelloProject.data.id})
            trelloExternalSources.save()
            project.externalSources.push(trelloExternalSources)
            project.save()
            return trelloExternalSources;
        } catch (error) {
            console.log(error)
        }
    },
    inviteMember: async (sourceId, email)=>{
        try{
            const trelloInvite = await axios.put(`https://api.trello.com/1/boards/${sourceId}/members?key=${process.env.TRELLO_API}&token=${process.env.TRELLO_TOKEN}&email=${email}`);
            return trelloInvite;
        }
        catch(error){
            console.log(error)
        }
    }
}