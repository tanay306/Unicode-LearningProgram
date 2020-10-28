const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

const employeeid = "5f681e78985c6c3488bb6ba2"

describe('Upload Route', () => {
	describe('Get Request for employee', () => {
		it('should return upload page', (done) => {
			chai.request(app)
				.get('/employee/${employeeid}/upload')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(200);
					done();
				});
        });
    });
    describe('Get Request for admin', () => {
		it('should return upload page', (done) => {
			chai.request(app)
				.get('/getResume')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(200);
					done();
				});
		});
    });
    describe('Post Request for employee', () => {
        it('should return details of uploaded file', (done) => {
			chai.request(app)
				.post('/employee/${employeeid}/upload')
				.set('Content-Type', 'application/x-www-form-urlencoded')
                .field('Content-Type', 'multipart/form-data')
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
    describe('Post Request for admin', () => {
        it('should return uploaded file', (done) => {
			chai.request(app)
				.post('/getResume')
				.set('Content-Type', 'application/x-www-form-urlencoded')
                .field('Content-Type', 'multipart/form-data')
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
    describe('Put Request for employee', () => {
		it('should return restricted for employee', (done) => {
			chai.request(app)
				.put('/employee/${employeeid}/upload')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(403);
					done();
				});
        });
    });
    describe('Put Request for admin', () => {
		it('should return restricted', (done) => {
			chai.request(app)
				.put('/getResume')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(403);
					done();
				});
        });
    });
    describe('Delete Request for employee', () => {
		it('should return restricted', (done) => {
			chai.request(app)
				.delete('/employee/${employeeid}/upload')
				.end((err, res) => {
					if (err) {
                        console.log(err);
                    }
					res.should.have.status(403);
					done();
				});
        });
    });
    describe('Delete Request for admin', () => {
		it('should return restricted', (done) => {
			chai.request(app)
				.delete('/getResume')
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