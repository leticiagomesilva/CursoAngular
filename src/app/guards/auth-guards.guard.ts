import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { pessoas,AcessType } from '../../../db';

export const authGuardsGuard: CanActivateFn = (route, state) => {
  console.log("tipo:" + AcessType.allAcess)
  if( ["ADMIN","USER"].includes(AcessType.allAcess) )return true;

  return false;
};
