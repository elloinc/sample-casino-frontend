import userSagas from './UserStore/Sagas';

import { reducers as auth } from './AuthStore/AuthRedux';
import { reducers as user } from './UserStore/UserRedux';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// for Root saga
export const sagas = [userSagas];

// for combineReducers
export const reducers = {
  auth,
  user,
};
