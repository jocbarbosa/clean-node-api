class LoginRouter {
    route(httpRequest) {
        const { email, password } = httpRequest.body;
        if (!email || !password) {
            return {
                statusCode: 400
            }
        }
    }
}

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
})