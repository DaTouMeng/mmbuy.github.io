/**
 * Created by Chiman on 2017/7/4.
 */
var webConfig = {
    prefix: 'http://',
<<<<<<< HEAD
    domain: '127.0.0.1',
=======
<<<<<<< HEAD
    domain: '139.199.192.48',
=======
    domain: 'http://139.199.192.48:9090/',
>>>>>>> 4a0aefcf86ed0840a5e179dcac0fc9db3e4d065e
>>>>>>> e5d94ac32da72cc62411cfab1ef5bafc7a5a0862
    port: '8080',
    getUrl: function (api) {
        if (api[0] == '/') {
            api = '/' + api;
        }
<<<<<<< HEAD
        return this.prefix + this.domin + this.port
        _api;
=======
        return this.prefix + this.domain + this.port + api;
>>>>>>> e5d94ac32da72cc62411cfab1ef5bafc7a5a0862
    }
}
