import matchService from '../services/matchService.js';
import {success,Error} from '../../../utils/response.js';

class MatchController {

  async battleMatch(req, res){
    try {
      let data = await matchService.battleMatch(req);
      success(res,'SUCCESS', data,200);
    } catch (error) {
      Error(req, res, error,500);
    }
  }

async battleList(req, res){
  try {
    let data = await matchService.battleList(req);
    success(res,'SUCCESS', data,200);
  } catch (error) {
    Error(req, res, error,500);
  }
}

}



export default new MatchController();
