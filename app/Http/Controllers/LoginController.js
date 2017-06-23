'use strict'

const User = use('App/Model/User')
const Config = use('Config')
const Nuxt = require('nuxt')

class LoginController {

  constructor () {
    let config = Config.get('nuxt')
    config.dev = Env.get('NODE_ENV') === 'development'
    this.nuxt = new Nuxt(config)
  }

  * githubRedirect (request, response) {
    yield request.ally.driver('github').redirect()
  }

  * test (request, response) {
    return this.nuxt.renderRoute('/admin')
  }

  * githubHandleCallback (request, response) {

    const gtUser = yield request.ally.driver('github').getUser()
    const searchAttr = {
      provider_id: gtUser.getId()
    }

    const newUser = {
      email: gtUser.getEmail(),
      username: gtUser.getName(),
      provider: 'github',
      provider_id: gtUser.getId(),
      provider_token: gtUser.getAccessToken()
    }

    const user = yield User.findOrCreate(searchAttr, newUser)
    yield request.auth.loginViaId(user.id)
    return this.nuxt.renderRoute('/admin')

  }

}

module.exports = LoginController
