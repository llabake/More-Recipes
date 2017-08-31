import IndexRoute from './indexRoute';
import UserRoute from './userRoute';

module.exports = (app) => {
  IndexRoute(app),
  UserRoute(app);
}
;
