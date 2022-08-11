const request = require('supertest')

require('dotenv').config()

describe("GET /api/stats", () => {
    test("should respond with 200 status code", async () => {
        const response = await request(`http://localhost:${process.env.PORT}/api/stats`).get('/')
        expect(response.statusCode).toBe(200)
    })
    test('response should be in json', async () => {
        const response = await request(`http://localhost:${process.env.PORT}/api/stats`).get('/')
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})