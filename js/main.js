const head = document.querySelector('.heading');
const nav = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    const scrolledPos = window.scrollY;
    if(scrolledPos > 20){
        head.classList.add('scrolled')
    }else{
        head.classList.remove('scrolled')
    }
})

function toggler(){
    document.querySelector('.bars-wrapper').classList.toggle('change');
    document.querySelector('.nav-bar').classList.toggle('change-nav');

    document.querySelector('.cover').classList.toggle('change-cover')
}

// nav[3].addEventListener('mouseover', () =>{
//     if(nav[3].classList.contains("present")){
//         nav[3].classList.remove('present')
//     }else(
//         nav[3].classList.add('present')
//     )
// })


const add = [['jerry', 28], ['ty', 23]];

const obj = Object.fromEntries(add);

console.log(Object.entries(obj))

