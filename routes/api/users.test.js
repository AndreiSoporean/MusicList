const request = require('supertest');

describe('The User API', () => {
    // Specific test
    it('Returns a list of all users', async () =>{
        //connect to the server and get a response
        //expect that response to be a 200 and server JSON
        const res = await request('http://localhost:3000')
            .get('/api/users/list')
            .expect(200)
            .expect('Content-Type', /json/);

        // these expects are jest, not supertest
        // first, expect to get a result that is an array
        expect(Array.isArray(res.body)).toBe(true);
        //second, expect that array to have somethin in it
        expect(res.body.length).toBeGreaterThan(0);
        // third, expect the username of the first returned user to be Administrator
        expect(res.body[1].username).toBe('administrator');
    });
});