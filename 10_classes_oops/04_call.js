function setusername(username) {
    this.username = username
    console.log('setusername');
    
}


function user(username,email,password) {
    setusername.call(this,username)
    this.email = email
    this.password = password
}


const user1 = new user('kalpesh','kkp@jio.com','123')
console.log(user1);
