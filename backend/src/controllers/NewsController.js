const connection = require('../database/connection');
var iconv = require('iconv-lite');

module.exports = {
  async retrieveNews(req, res){
    
    const systems = await connection('glpi_ticketcategories')
                      .whereNot('name', 'Todos')
                      .whereNot('name', 'Outros')
                      .select('id','name')
                      .orderBy('ordem');

    
    let objectToReturn = {};
    objectToReturn.systems = [];   

    for (let i = 0; i < systems.length; i++) {
      let modules = [];
      const modulesFromDB = await connection('modulos')
                      .where('sistemaId', systems[i].id)
                      .select('descricao')
                      .options({ rowMode: 'array' });
      
      modulesFromDB.forEach(element => modules.push(element.descricao));
      
      let news = [];
      
      const newsFromDB = await connection
            .select({name: 'chamados.name', 
                    description: 'chamados.solution', 
                    date: 'chamados.solvedate',
                    version: 'versao.name'})
            .from({chamados: 'glpi_tickets'})
            .leftJoin({origemRequisicao: 'glpi_requesttypes'}, 'origemRequisicao.id', 'chamados.requesttypes_id')
            .leftJoin({sistema: 'glpi_ticketcategories'}, 'sistema.id', 'chamados.ticketcategories_id')
            .leftJoin({versao: 'glpi_ticketsolutiontypes'}, 'versao.id', 'chamados.ticketsolutiontypes_id')
            .where(function() {
              this.where('chamados.status', 'closed')
              .orWhere('chamados.status', 'solved')
            }).whereNot('chamados.requesttypes_id',3)
            .whereNot('chamados.type',4)
            .where('chamados.ticketcategories_id',systems[i].id)
            .whereNot('chamados.solution','')
            .orderBy('chamados.solvedate','desc');

      newsFromDB.forEach(element => news.push({
          "name": element.name,
          "description": decodedBody,
          "date": element.date,
          "version": element.version
      }));

      const newSystem = {
        "name": systems[i].name,
        "id": systems[i].id,
        "modules": modules,
        "news": news
      }
  
      objectToReturn.systems.push(newSystem);

    }

    return res.json(objectToReturn);
  }
};