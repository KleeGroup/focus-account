import {network} from 'focus';
import {rootURL, accountURL} from '../config.json';
export function loadAccountById(accountId){
  return network.fetch({
    url: `${rootURL}/${accountURL}/${accountId}`,
    method: 'GET'
  });
}
