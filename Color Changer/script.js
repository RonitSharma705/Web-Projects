const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
    button.addEventListener('click', function(e){
        const color = e.target.id
        if(color === 'Black'){
            body.style.backgroundColor = 'Black';
            body.style.color = 'White';
            buttons.forEach(btn => btn.style.borderColor = "white");
        }
        if(color === 'White'){
            body.style.backgroundColor = 'White';
            body.style.color = 'Black';
            buttons.forEach(btn => btn.style.borderColor = "black");
        }
    })
});
