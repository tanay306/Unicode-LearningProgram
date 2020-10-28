const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('Index Route', () => {
	describe('Get Request', () => {
		it('should return index page', (done) => {
			chai.request(app)
				.get('/')
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
        it('should return restricted', (done) => {
            chai.request(app)
                .post('/')
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
                .put('/')
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
                .delete('/')
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
    