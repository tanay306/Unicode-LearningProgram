const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('Sign In Route', () => {
	describe('Get Request', () => {
		it('should return sign in page', (done) => {
			chai.request(app)
				.get('/signIn')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
                    res.should.have.status(200);
                    done();
				});
		});
    });
    describe('Post Request', () => {
		it('should return signed in', (done) => {
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
                    res.should.have.status(200);
                    done();
				});
		});
    });
    describe('Put Request', () => {
        it('should return restricted', (done) => {
            chai.request(app)
                .put('/signIn')
                .end((err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    res.should.have.status(403);
                    done();
                });
        });
    });
    describe('Delete Request', () => {
        it('should return restricted', (done) => {
            chai.request(app)
                .delete('/signIn')
                .end((err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    res.should.have.status(403);
                    done();
                });
        });
    });
});

describe('Sign Up Route', () => {
	describe('Get Request', () => {
		it('should return sign up page', (done) => {
			chai.request(app)
				.get('/signUp')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(200);
					done();
				});
		});
    });
    describe("Post request", () => {
        it('should return signed up', (done) => {
            chai.request(app)
                .post('/signUp')
                .send({
                    username: 'tanny',
                    password: 'tanay',
                    role: 'admin'
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
    })
    describe('Put Request', () => {
        it('should return restricted', (done) => {
            chai.request(app)
                .put('/signUp')
                .end((err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    res.should.have.status(403);
                    done();
                });
        });
    });
    describe('Delete Request', () => {
        it('should return restricted', (done) => {
            chai.request(app)
                .delete('/signUp')
                .end((err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    res.should.have.status(403);
                    done();
                });
        });
    });
});
