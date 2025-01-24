let rannum = parseInt((Math.random()*100+1))

const userinput = document.querySelector('#userinput')
const guessbutton = document.querySelector('#guess')
const description = document.querySelector('.description')
const remnum = document.querySelector('.remnum')
const gameend = document.querySelector('.gameend')
const guesslist = document.querySelector('.guesslist')
let prevGuess = []
remnum.innerHTML = 10
let temp = 10
let playgame = true
if (playgame) {
    guessbutton.addEventListener('click',function (e) {
        e.preventDefault()
        const enternum = parseInt(userinput.value);
        validatenum(enternum)
        
        remainingnumber()
        
    })
}

function validatenum(num) {
    if (num<1) {
        alert(`Enter number greater than 1`)
    } else if (num>100) {
        alert(`Enter number less than 100`)
    }
    else if (isNaN(num)) {
        alert(`Enter the valid number`)
    }else if (num === '') {
        alert(`enter the number`)
    }else {
        checknumber(num)
    }
    listatomadd(num)
}

function checknumber(num) {
    if (num<rannum ) {
        description.innerHTML = `Number is too Low`
    } else if (num>rannum){
        description.innerHTML = `Number is too High`
    } else {
        description.innerHTML = `Congrats! You guess it right, Number is ${num}`
        gameend.innerHTML = `click here for restart the game`

    }
}

function remainingnumber () {
    if (temp>0) {
        temp = temp - 1;
        remnum.innerHTML = `${temp}`
    } else {
        playgame = false
        gameend.innerHTML = `click here for restart the game`
    }
}

function newgame() {
    guesslist.innerHTML = ''
    gameend.innerHTML = ''
    description.innerHTML = ''
    rannum = parseInt((Math.random()*100+1))
    remnum.innerHTML = 10
    temp = 10
    playgame = true 
    
}

gameend.addEventListener('click',function (e) {
    e.preventDefault()
    newgame()
})

function listatomadd(prevGuess) {
    guesslist.innerHTML += `${prevGuess} ,`
}