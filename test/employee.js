const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

const employeeid = "5f681e78985c6c3488bb6ba2"

describe('Employees Routes', () => {
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
		it('should get list of all employees', (done) => {
			chai.request(app)
				.get('/employee')
				.end((err, res) => {
					if (err) {
						console.log(err);
					}
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
		it('should get a single employee', (done) => {
			chai.request(app)
				.get(`/employee/${employeeid}`)
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
		it('should create and return a employee', (done) => {
			chai.request(app)
				.post('/employee')
				.send({
                    name: 'tanay',
                    contacts: 123456,
                    salary: '10000'
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
				.post(`/employee/${employeeid}`)
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
				.put('/employee')
				.end((err, res) => {
					if (err) {
						console.log(err);
					}
					res.should.have.status(403);
					done();
				});
		});
		it('should update a single employee', (done) => {
			chai.request(app)
				.put(`/employee/${employeeid}`)
				.send({ name: 'Tanay' })
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
				.delete('/employee')
				.end((err, res) => {
					if (err) {
						console.log(err);
					}
					res.should.have.status(403);
					done();
				});
		});
		it('should delete a single employee', (done) => {
			chai.request(app)
				.delete(`/employee/${employeeid}`)
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