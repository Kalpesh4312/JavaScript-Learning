const User = {
    name : 'kalpesh',
    password : 'KKP@4312',

    get password(){
        return `can't return Password`
    },
    set password(value){
        this._password = value
    }
}

console.log(User.password);
