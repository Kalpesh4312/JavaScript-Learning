// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptedPassword(){
//         return `${this.password}abc`
        
//     }

//     nameProper(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User('kalpesh','kkp@gmail.com','123')


// console.log(user1.encryptedPassword());
// console.log(user1.nameProper());

//*****************Behind the Scene************************ */


// const User = function (username,email,password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }


// User.prototype.encryptedPassword = function () {
//     return `${this.password}abc`
// }

// User.prototype.nameProper = function () {
//     return `${this.username.toUpperCase()}`
// }

// const user1 = new User('kalpesh','kkp@gmail.com','123')

// console.log(user1);

// console.log(user1.encryptedPassword());
// console.log(user1.nameProper());



