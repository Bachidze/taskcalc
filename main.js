 const inside = document.querySelector('.inside')
const buttonbg = document.querySelector('.buttonbg')
const input = document.querySelector('input')
const h3 = document.querySelector('.h3color')
const h4 = document.querySelector('.h3color2')
const h5 = document.querySelector('.h3color3')
const theme = document.querySelector('h5')
const svg = document.querySelector('.svg1')
const del = document.querySelector('.del')
const reset = document.querySelector('.btn1')
const equalbtn = document.querySelector('.btn2')
const out = document.querySelector('.out')
const button = document.querySelectorAll('.button10');
button.forEach(button => {
    button.addEventListener('click', () => {
        numberinput(button.textContent);
    });
});

function numberinput(value) {
    input.value += value;
}

function white(){
    document.body.classList.toggle('white')
    buttonbg.classList.toggle('buttonebisbgcolor')
    input.classList.toggle('inpucolor')
    h3.classList.toggle('color1')
    h4.classList.toggle('color1')
    h5.classList.toggle('color1')
    theme.classList.toggle('color1')
    svg.classList.toggle('color2')
    del.classList.toggle('delbtn')
    reset.classList.toggle('resbtn')
    equalbtn.classList.toggle('equalbtn')
    out.classList.toggle('outbgcolor')
}


inside.addEventListener('click',()=>{
    white()
    rotate()

})

function rotate(){
    inside.classList.toggle('rotate')
}
 





