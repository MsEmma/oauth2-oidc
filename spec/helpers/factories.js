const rosie = require('rosie')
const Factory = rosie.Factory

exports.Factory = Factory

exports.user = Factory.define('user')
//  .sequence('id')
  .sequence('name', i => `tester ${ i }`)
  .sequence('sub', i => `sub${ i }-${ new Date().getTime() }`)

exports.access = Factory.define('access')
  .sequence('token', (i) => `token${ i }-${ new Date().getTime() }`)
  .attr('type', 'bearer')
  .attr('scope', [ 'userinfo', 'openid', 'profile' ])
  // .attr('client', () => {
  //   return Factory.build('client')
  // })
  // .attr('user', () => {
  //   return Factory.build('user')
  // })

exports.auth = Factory.define('auth')
  .attr('scope', [ 'userinfo', 'openid', 'profile' ])
  .sequence('code', i => `code-${ i }-${ new Date().getTime() }`)
  .attr('redirectUri', 'http://some.host.here')
  .attr('responseType', 'code')
  .attr('status', 'created')

exports.refresh = Factory.define('refresh')
  .sequence('token', (i) => `refresh-token-${ i }-${ new Date().getTime() }`)
  .attr('status', 'created')

exports.client = Factory.define('client')
  .sequence('key', (i) => `key${ i }-${ new Date().getTime() }`)
  .sequence('secret', (i) => `secret${ i }`)
  .sequence('name', (i) => `client-name-${ i }`)
  .attr('redirect_uris', [ 'http://some.host.here', 'https://another.host.there' ])
  .attr('scope', [ 'openid', 'magicX' ])
  .attr('enforceAuthOnTokenRequest', true)
