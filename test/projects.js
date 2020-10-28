const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

const projectid = '5f681fec985c6c3488bb6ba9';

describe('Project Routes', () => {
	before((done) => {
		chai.request(app)
			.post('/signIn')
			.send({
                username: 'tanay',
                password: 'tanay'
            })
			.end((err, res) => {
				if (err) {
                    console.log(err);
                }
				done();
			});
	});
	describe('Get Request', () => {
		it('should get list of all projects', (done) => {
			chai.request(app)
				.get('/project')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
		it('should get a single project record', (done) => {
			chai.request(app)
				.get(`/project/${projectid}`)
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
	});
	describe('Post Request', () => {
		it('should create and return a project', (done) => {
			chai.request(app)
				.post('/project')
				.send({
                    name: 'project1',
                    customer: ['5f681f8e985c6c3488bb6ba7'],
                    employees: ['5f681fa4985c6c3488bb6ba8'],
                    startdate: '2020-10-10T01:13:36.396+00:00'
                })
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
		it('should return restricted', (done) => {
			chai.request(app)
				.post(`/project/${projectid}`)
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(403);
					done();
				});
		});
    });    
    describe('Put Request', () => {
		it('should return restricted', (done) => {
			chai.request(app)
				.put('/project')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(403);
					done();
				});
		});
		it('should update a single project record', (done) => {
			chai.request(app)
				.put(`/project/${projectid}`)
				.send({ name: 'tanay' })
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
	});
	describe('Delete Request', () => {
		it('should return restricted', (done) => {
			chai.request(app)
				.delete('/project')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(403);
					done();
				});
		});
		it('should delete a single project record', (done) => {
			chai.request(app)
				.delete(`/project/${projectid}`)
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
	});
});