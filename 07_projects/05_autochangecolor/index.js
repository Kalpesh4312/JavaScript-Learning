
function returncolor() {
    let hex = '#'
    const col = "0123456789ABCDEF";
    let rannum
    for (let i = 0; i < 6; i++) {
        rannum = (Math.floor(Math.random()*16))
        hex += col[rannum]
    }

    return hex
    
}

const newcolorfunction = function newcolor() {
    const color = returncolor()
    
        document.body.style.backgroundColor = color
       

    
}

let intervalid;

document.querySelector('#start').addEventListener('click',function () {
    if (!intervalid) {
        intervalid = setInterval(newcolorfunction,1000)
    }
})

document.querySelector('#stop').addEventListener('click',function () {
    clearInterval(intervalid)
    intervalid = null
})

