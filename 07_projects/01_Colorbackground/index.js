const buttonlist = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttonlist.forEach( function (button) {
    button.addEventListener('click', function (e) {
        
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor  = e.target.id
                break;
            
            case 'white':
                body.style.backgroundColor  = e.target.id
                break;

            case 'black':
                body.style.backgroundColor  = e.target.id
                break;
            
            case 'red':
                body.style.backgroundColor  = e.target.id
                break;

            case 'lime':
                body.style.backgroundColor = e.target.id
                break;

            default:
                break;
        }
        
    })
    
} )