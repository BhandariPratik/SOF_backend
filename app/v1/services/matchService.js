


import { custom } from '../../../config/connection.js';

class MatchService {

  battleMatch(req) {
    console.log('body',req.body)
    console.log('filesss',req.file)
    return new Promise(async (resolve, reject) => {
      try {
        let {
          name,
          desc
        } = req.body

        let battleImage = req.file ? `http://localhost:4000/uploads/${req.file.filename}`: null;
              
          const data = await custom(`INSERT INTO battlematch (name, description, battleimage)  
            VALUES ('${name}', '${desc}', '${battleImage}')`)
          return resolve({
            data
          });

      } catch (error) {
        return reject(error);
      }
    });
  }


  battleList(req) {
    return new Promise(async (resolve, reject) => {
      try {
        
          const data = await custom('select * from battlematch')
          
          return resolve({
            data
          });
        

      } catch (error) {
        return reject(error);
      }
    });
  }



}

export default new MatchService();