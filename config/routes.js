/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/signup':  { action: 'account/signup' },
  '/login': {action: 'account/login2'},
  // 'GET /login': {view: 'unregistered/login'},
  'POST /login': {action: 'account/login2'},
  'POST /signup':   { action: 'account/signup2' },
  '/controlpanel': {action: 'account/controlpanel'},
   '/logout': {action: 'account/logout'},
   '/forgot':{action: 'account/email'},
  'POST /forgot':{action: 'account/email2'},
  'GET /reset/:id':{action: 'account/reset'},
  'POST /reset':{action: 'account/reset2'},
  '/newpage': {action: 'entrance/newpage'}
  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
