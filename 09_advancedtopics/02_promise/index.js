// const promiseOne = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log('promiseOne is executed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function () {
//     console.log('it is done');
    
// })


// new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         const num = 2
//         console.log('task 2 is completed');
//         resolve(num)
        
//     },1000)
// }).then(function (num) {
//     console.log(`task ${num} is executed`);
    
// })


// const promisthree = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         const bool = true
//         if(bool){
//             console.log('resolve is done');
            
//             resolve({name:'kalpesh',password:'123'})
//         }
//         else{
//             reject('reject is done')
//         }
//     },1000)
// })

// promisthree.then(function (obj) {
//     console.log(obj);
//     return obj.name
// }).then(function (name) {
//     console.log(name);
    
// }).catch(function (str) {
//     console.log(str);
    
// })



// const promisefour = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         const bool = true
//         if(bool){
//             console.log('resolve is done');
            
//             resolve({name:'kalpesh',password:'123'})
//         }
//         else{
//             reject('Sorry : An Error Occured')
//         }
//     },1000)
// })

// promisefour.then(function (obj) {
//     console.log(obj);
//     return obj.name
// }).then(function (name) {
//     console.log(name);
    
// }).catch(function (str) {
//     console.log(str);
    
// }).finally(function () {
//     console.log('All Task is completed');
    
// })


// async function wait() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchaudhary')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:',error);
        
//     }
    
// }

// wait()


fetch('https://api.github.com/users/hiteshchaudhary')
.then(function (response) {
    return response.json()
    
}).then(function (data) {
    console.log(data);
    
}).catch(function (error) {
    console.log("E :",error);
    
})
