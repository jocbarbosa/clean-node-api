const LoginRouter = require('./login-router')
const MissingParamError = require('../helpers/missin-param-error')

describe('Login Router', () => {
    test('Should return 400 if no email was provided', () => {
        const sut = new LoginRouter()
        const httpRequest = {
            body: {
                password: 'any_password',
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
    })

    test('Should return 400 if no password was provided', () => {
        const sut = new LoginRouter()
        const httpRequest = {
            body: {
                email: 'any@email.com',
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })

    test('Should return 500 if no httpRequest is provided', () => {
        const sut = new LoginRouter()

        const httpResponse = sut.route()

        expect(httpResponse.statusCode).toBe(500)
    })

    test('Should return 500 if no httpRequest has no body', () => {
        const sut = new LoginRouter()
        const httpRequest = {}
        const httpResponse = sut.route(httpRequest)

        expect(httpResponse.statusCode).toBe(500)
    })
})