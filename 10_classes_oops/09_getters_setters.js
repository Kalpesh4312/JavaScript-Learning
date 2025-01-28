class User{
    constructor(name,age,password){
        this.name = name
        this.age = age
        this.password = password
    }


    get name(){
        return `${this._name}`
    }
    set name(value){
        this._name = value
    }

    set password(value){
        this._password = value
    }

    get password(){
        return `We cant allow to give you password`
    }
}


const user1 = new User('kalpesh','18','KKP@4312')

console.log(user1.name);

