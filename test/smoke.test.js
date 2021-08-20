const Nightmare = require('nightmare');
const chai = require('chai');
const expect = chai.expect;

  describe('Login Page', () => {
    it('Customer login check with vaild parameters :-', function(done) {
      this.timeout('10s')
      const nightmare = Nightmare({
        show: true
      })
      nightmare
        .goto('http://localhost:3000/login')
        .type('#login_email', 'rishi13071995@gmail.com')
        .type('#login_password', '12345678')
        .click('#login_button')
        .wait(2000)
        .end()
        .then(link => {
          console.log(link)
          // expect(200).to.equal('http://localhost:3000/login/home')
          done()
        })
        
    })

    it('Customer logout check :-', function(done) {
      this.timeout('10s')
      const nightmare = Nightmare({
        show: true
      })
      nightmare
        .goto('http://localhost:3000/login/home')
        .click('#logoutBtn')
        .wait(2000)
        .end()
        .then(link => {
          console.log(link)
          done()
        })
        
    })


    it('Customer login check with invaild parameters :-', function(done) {
      this.timeout('10s')
   
      const nightmare = Nightmare({
        show: true
      })
      nightmare
        .goto('http://localhost:3000/login')
        .type('#login_email', 'rishi13071995@gmail.com')
        .type('#login_password', '123')
        .click('#login_button')
        .wait(2000)
        .end()
        .then(link => {
          console.log(link)
          // expect(200).to.equal('http://localhost:3000/login/home')
          done()
        })
        
    })

    it('Customer login check with wrong password parameters :-', function(done) {
      this.timeout('10s')
   
      const nightmare = Nightmare({
        show: true
      })
      nightmare
        .goto('http://localhost:3000/login')
        .type('#login_email', 'rishi13071995@gmail.com')
        .type('#login_password', '1234567')
        .click('#login_button')
        .wait(2000)
        .end()
        .then(link => {
          console.log(link)
          done()
        })
        
    })

    it('Customer registration with correct details :-', function(done) {
      this.timeout('10s')
   
      const nightmare = Nightmare({
        show: true
      })
      nightmare
        .goto('http://localhost:3000/register')
        .type('#registerName', 'rishi13071995@gmail.com')
        .type('#registerContactNumber', '123')
        .type('#registerEmail', '123')
        .type('#registerPassword', '123')
        .click('#registerBtn')
        .wait(2000)
        .end()
        .then(link => {
          console.log(link)
         done()
        })
        
    })
  })



 
  