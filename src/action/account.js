import  { loadAccountById } from '../service/account';
import { application } from 'focus';
let actionBuilder = application.actionBuilder;
export function load(id){
  return actionBuilder({
    service: loadAccountById,
    node: 'account',
    status: 'loaded'
  })(id);
}
