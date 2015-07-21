//Dependencies.
import {store} from 'focus';
let CoreStore = store.CoreStore;

const definition = {
  'account': 'account'
};

/**
 * Class standing for the account relative data store.
 */
class AccountStore extends CoreStore {
  constructor(conf){
    console.log('accountStore');
    conf = conf || {};
    conf.definition = conf.definition || definition;
    super(conf);
  }
}

export default AccountStore;
