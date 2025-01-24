const clock = document.querySelector('#clock')

const datenow = document.querySelector('.logo')


setInterval(function () {
    const date = new Date();
    datenow.innerHTML = date.toLocaleDateString()
    clock.innerHTML = date.toLocaleTimeString()
},1000)