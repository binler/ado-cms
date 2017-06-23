'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.group('authenticate-social', function(){
  Route.get('github/login', 'LoginController.githubRedirect')
  Route.get('github/authenticated', 'LoginController.githubHandleCallback')
  Route.get('test', 'LoginController.test')
}).prefix('social')

Route.group('adminv1', function(){
  Route.get('/', function * (request, response){

  })
}).prefix('admin')

Route.any('*', 'NuxtController.render')
