const request = require('supertest')

require('dotenv').config()

describe("GET /api/journeys", () => {
    test("should respond with 200 status code", async () => {
        const response = await request(`http://localhost:${process.env.PORT}/api/journeys`).get('/').query({page: 0})
        expect(response.statusCode).toBe(200)
    })
    test('response should be in json', async () => {
        const response = await request(`http://localhost:${process.env.PORT}/api/journeys`).get('/').query({page: 0})
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
    test('search function should return 200 status code', async () => {
        const response = await request(`http://localhost:${process.env.PORT}/api/journeys`).get('/search/arabiankatu').query({page: 0})
        expect(response.statusCode).toBe(200)
    })
    test('search function response should be in json', async () => {
        const response = await request(`http://localhost:${process.env.PORT}/api/journeys`).get('/search/arabiankatu').query({page: 0})
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})
