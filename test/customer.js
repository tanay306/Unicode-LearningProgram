const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

const customerid = '5f681e78985c6c3488bb6ba2';

describe('Customer Routes', () => {
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
		it('should get list of all customers', (done) => {
			chai.request(app)
				.get('/customer')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
		it('should get a single customer', (done) => {
			chai.request(app)
				.get(`/customer/${customerid}`)
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
		it('should create and return a customer', (done) => {
			chai.request(app)
				.post('/customer')
				.send({
                    name: 'tanay',
                    contacts: 1223
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
				.post(`/customer/${customerid}`)
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
				.put('/customer')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(403);
					done();
				});
		});
		it('should update a single customer record', (done) => {
			chai.request(app)
				.put(`/customer/${customerid}`)
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
				.delete('/customer')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(403);
					done();
				});
		});
		it('should delete a single customer record', (done) => {
			chai.request(app)
				.delete(`/customer/${customerid}`)
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