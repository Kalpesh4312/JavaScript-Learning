// const Arr = ['kalpesh','yash']

// const newObj = {
//     username :'kalpesh',
//     login : 25,
//     details:function () {
//         console.log(`hello ${this.username}`);
        
//     }
// }

// Object.prototype.devesh = function () {
//     console.log(`here devesh is complete.`);
    
// }

// newObj.devesh()

//************ Inheritance *********** */


// const teacherTA = {
//     assi : 3,
//     marks : 15,
//     details : function () {
//         console.log(`there are ${this.assi} assignments for ${this.marks} marks`);
        
//     }
// }

// const teacher ={
//     name : 'kalpesh',
//     age : 21,
       // __proto__ : teacherTA
// }

// Object.setPrototypeOf(teacher,teacherTA)

// console.log(teacher.teacherTA);


const str = 'kalpesh   '

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
    
}

str.trueLength()


'devesh yala     lavala'.trueLength()