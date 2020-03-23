const request = require('supertest');
const app = require('../src/main')

describe('test root routes', () => {
  it('GET /ping', async () => {
    const { headers, body, statusCode } = await request(app)
      .get('/ping')
      .set('Accept', 'application/json')
    expect(headers['content-type']).toMatch('application/json')
    expect(body).toBe('pong')
    expect(statusCode).toBe(200)
  })
  it('POST /ping', async () => {
    const { headers, body, statusCode } = await request(app)
      .post('/ping')
      .send()
      .set('Accept', 'application/json')
    expect(headers['content-type']).toMatch('application/json')
    expect(body).toHaveProperty('message')
    expect(statusCode).toBe(404)
  })
  it('PUT /ping', async () => {
    const { headers, body, statusCode } = await request(app)
      .put('/ping')
      .send()
      .set('Accept', 'application/json')
    expect(headers['content-type']).toMatch('application/json')
    expect(body).toHaveProperty('message')
    expect(statusCode).toBe(404)
  })
  it('DELETE /ping', async () => {
    const { headers, body, statusCode } = await request(app)
      .delete('/ping')
      .send()
      .set('Accept', 'application/json')
    expect(headers['content-type']).toMatch('application/json')
    expect(body).toHaveProperty('message')
    expect(statusCode).toBe(404)
  })
  it('GET /time', async () => {
    const { headers, body, statusCode } = await request(app)
      .get('/time')
      .set('Accept', 'application/json')
    expect(headers['content-type']).toMatch('application/json')
    expect(statusCode).toBe(200)
    expect(body).toHaveProperty('now')
    const dateNow = new Date(body.now)
    const now = new Date()
    expect(dateNow.getFullYear()).toBe(now.getFullYear())
    expect(dateNow.getMonth()).toBe(now.getMonth())
    expect(dateNow.getDay()).toBe(now.getDay())
    expect(dateNow.getMinutes()).toBe(now.getMinutes())
  })
  it('GET /version', async () => {
    const { headers, body, statusCode } = await request(app)
      .get('/version')
      .set('Accept', 'application/json')
    expect(headers['content-type']).toMatch('application/json')
    expect(statusCode).toBe(200)
    expect(body).toHaveProperty('version')
    expect(body.version).toMatch(/[0-9]+\.[0-9]+\.[0-9]+$/i)
  })
})
