//Loading Animation
const load = document.querySelector('.load');

window.addEventListener('load', () => {
    load.style.display = 'none';
});



//Nav Scroll Transition
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    let scroll = this.scrollY;
    if(scroll > 250) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});



//Navbar Toggle
const list = document.querySelector('ul');
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    list.classList.toggle('toggle');
});



//Image Slider
const slider = document.querySelector('.slider__images');
const image = slider.querySelectorAll('.image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 1;
const width = image[0].clientWidth;

const swap = () => slider.style.transform = 'translateX(' + (-width * index) + 'px)';
const trnst = () => slider.style.transition = 'transform 0.2s ease-in-out';
const notrsnt = () => slider.style.transition = 'none';
swap();
trnst();

next.addEventListener('click', () => {
    if(index >= 3) return;
    trnst();
    index++;
    swap();
});

prev.addEventListener('click', () => {
    if(index < 0) return;
    swap();
    index--;
    trnst();
});

slider.addEventListener('transitionend', () => {
    if(image[index].id === 'first') {
        notrsnt();
        index = image.length - index;
        swap();
    }
    if(image[index].id === 'last') {
        notrsnt();
        index = image.length - 2;
        swap();
    }
});

setInterval(() => {
    trnst();
    index++;
    swap();
}, 4000);



//Card Slider
const cardSlider = document.querySelector('#slider');
const slides = document.querySelectorAll('.slider__cards');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let counter = 1;
const size = slides[0].clientWidth;
console.log(size);

const slide = () => cardSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
slide();
const transition = () => cardSlider.style.transition = 'transform 0.2s ease-in-out';
const notransition = () => cardSlider.style.transition = 'none';

nextBtn.addEventListener('click', () => {
    if(counter > 4) return;
    transition();
    counter++;
    slide();
});

prevBtn.addEventListener('click', () => {
    if(counter < 1) return;
    transition();
    counter--;
    slide();
});

cardSlider.addEventListener('transitionend', () => {
    if(slides[counter].id === 'last') {
        notransition();
        counter = slides.length - 4;
        slide();        
    }
    if(slides[counter].id === 'first') {
        notransition();
        counter = slides.length - counter - 2;
        slide();        
    }
});

setInterval(() => {
    transition();
    counter++;
    slide();
}, 3000);



//Items Selector
const itemSection = document.querySelector('.items__cards'); 
const items = document.querySelectorAll('.items__cards .card');
const navButtons = document.querySelectorAll('.items nav button')
const all = document.getElementById('all');
const music = document.getElementById('music');
const digital = document.getElementById('digital');
const blockchain = document.getElementById('blockchain');
const virtual = document.getElementById('virtual');

all.addEventListener('click', () => {
    items.forEach(item => {
        navButtons.forEach(button => { if(button.classList.contains('btn__primary')) {
            button.classList.remove('btn__primary');
            button.classList.add('btn__secondary');
        };
    });
    item.style.display = 'flex';
});
all.classList.remove('btn__secondary');
all.classList.add('btn__primary');
});

music.addEventListener('click', () => {
    items.forEach(item => {
        if(!item.classList.contains('music')) {
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        };
        navButtons.forEach(button => { if(button.classList.contains('btn__primary')) {
            button.classList.remove('btn__primary');
            button.classList.add('btn__secondary');
        };
    });
});
music.classList.remove('btn__secondary');
    music.classList.add('btn__primary');
});

digital.addEventListener('click', () => {
    items.forEach(item => {
        if(!item.classList.contains('digital')) {
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        };
        navButtons.forEach(button => { if(button.classList.contains('btn__primary')) {
            button.classList.remove('btn__primary');
            button.classList.add('btn__secondary');
        };
    });
});
digital.classList.remove('btn__secondary');
digital.classList.add('btn__primary');
});

blockchain.addEventListener('click', () => {
    items.forEach(item => {
        if(!item.classList.contains('blockchain')) {
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        };
        navButtons.forEach(button => { if(button.classList.contains('btn__primary')) {
            button.classList.remove('btn__primary');
            button.classList.add('btn__secondary');
        };
    });
});
blockchain.classList.remove('btn__secondary');
blockchain.classList.add('btn__primary');
});

virtual.addEventListener('click', () => {
    items.forEach(item => {
        if(!item.classList.contains('virtual')) {
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        };
        navButtons.forEach(button => { if(button.classList.contains('btn__primary')) {
            button.classList.remove('btn__primary');
            button.classList.add('btn__secondary');
        };
    });
});
    virtual.classList.remove('btn__secondary');
    virtual.classList.add('btn__primary');
});


