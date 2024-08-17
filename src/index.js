import './styles/style.scss'
import menuIcon from './assets/menuOpen.svg'
import logo from './assets/logo.svg'
import interiorImg from './assets/interior.png'
import sliderImg from './assets/sliderImg.png'
import leftArrow from './assets/leftArrow.svg'
import rightArrow from './assets/rightArrow.svg'
import whiteLogo from './assets/logoWhite.svg'
import instaIcon from './assets/instagram.svg'
import whatsappIcon from './assets/whatsapp.svg'
import telegramIcon from './assets/telegram.svg'
import cross from './assets/cross.svg'
import hoverRightArrow from './assets/rightArrowGreen.svg'
import hoverLeftArrow from './assets/leftArrowGreen.svg'
import crossBlack from './assets/crossBlack.svg'
import { slides } from './slider.js'

const menuOpenIcon = document.querySelector('.header__btn-icon')
const headerLogo = document.querySelector('.header__logo')
const interiorImage = document.querySelector('.main__img')
const sliderImage = document.querySelector('.slider__block-img')
const leftArrowImg = document.querySelector('.slider__control-btn-left')
const rightArrowImg = document.querySelector('.slider__control-btn-right')
const whiteLogoImg = document.querySelector('.footer__icons-logo')
const instaImg = document.querySelector('.footer__icons-socials-instagram')
const whatsappImg = document.querySelector('.footer__icons-socials-whatsapp')
const telegramImg = document.querySelector('.footer__icons-socials-tg')
const menu = document.querySelector('.main__menu')
const formButton = document.querySelector('.popup__button-img')
const popup = document.querySelector('.popup')

menuOpenIcon.src = menuIcon
headerLogo.src = logo
interiorImage.src = interiorImg
sliderImage.src = sliderImg
leftArrowImg.src = leftArrow
rightArrowImg.src = rightArrow
whiteLogoImg.src = whiteLogo
instaImg.src = instaIcon
whatsappImg.src = whatsappIcon
telegramImg.src = telegramIcon
formButton.src = crossBlack

const updateMenuDisplay = () => {
    const isMobile = window.innerWidth <= 1023;
    if (isMobile) {
        menu.style.display = 'none';
        menuOpenIcon.addEventListener('click', toggleMenu);
    } else {
        menu.style.display = 'block';
        menuOpenIcon.removeEventListener('click', toggleMenu);
    }
}

const toggleMenu = () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        menuOpenIcon.src = cross;
    } else {
        menu.style.display = 'none';
        menuOpenIcon.src = menuIcon;
    }
};

leftArrowImg.addEventListener('mouseover', () => {
    leftArrowImg.src = hoverLeftArrow
})

leftArrowImg.addEventListener('mouseleave', () => {
    leftArrowImg.src = leftArrow
})
rightArrowImg.addEventListener('mouseover', () => {
    rightArrowImg.src = hoverRightArrow
})

rightArrowImg.addEventListener('mouseleave', () => {
    rightArrowImg.src = rightArrow
})
leftArrowImg.addEventListener('mousedown', () => {
    leftArrowImg.src = hoverLeftArrow
})

leftArrowImg.addEventListener('mouseup', () => {
    leftArrowImg.src = leftArrow
})
rightArrowImg.addEventListener('mousedown', () => {
    rightArrowImg.src = hoverRightArrow
})

rightArrowImg.addEventListener('mouseup', () => {
    rightArrowImg.src = rightArrow
})


leftArrowImg.addEventListener('touchstart', () => {
    leftArrowImg.src = hoverLeftArrow
})

leftArrowImg.addEventListener('touchend', () => {
    leftArrowImg.src = leftArrow
})
rightArrowImg.addEventListener('touchstart', () => {
    rightArrowImg.src = hoverRightArrow
})

rightArrowImg.addEventListener('touchend', () => {
    rightArrowImg.src = rightArrow
})


document.querySelector('.slider__block-desc-btns-1').addEventListener('touchstart', (e) => {
    e.target.classList.add('isActive-solid');
});

document.querySelector('.slider__block-desc-btns-1').addEventListener('touchend', (e) => {
    e.target.classList.remove('isActive-solid');
});

document.querySelector('.slider__block-desc-btns-2').addEventListener('touchstart', (e) => {
    e.target.classList.add('isActive-empty');
});

document.querySelector('.slider__block-desc-btns-2').addEventListener('touchend', (e) => {
    e.target.classList.remove('isActive-empty');
});

updateMenuDisplay();

popup.style.display = 'none'
function centerPopup() {
    if (window.innerWidth <= 1023) {
        const w = 340;
        const h = 350;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const left = (windowWidth - w) / 2;
        const top = (windowHeight - h) / 2;
        popup.style.position = 'fixed';
        popup.style.left = `${left}px`;
        popup.style.top = `${top}px`;
        popup.style.width = `${w}px`;
        popup.style.height = `${h}px`;
    }
}

window.addEventListener('load', () => {
    centerPopup();
    popup.style.display = 'block';
    setTimeout(() => {
        popup.classList.add('active');
    }, 5000);
});

window.addEventListener('resize', centerPopup);

formButton.addEventListener('click', () => {
    popup.classList.remove('active');
    setTimeout(() => {
        popup.classList.add('active');
    }, 120000);
});

window.addEventListener('resize', updateMenuDisplay);
let currentSlideIndex = 0;
const animationDuration = 500;

function updateSlide() {
    const subtitleElement = document.querySelector('.slider__block-desc-subtitle');
    const listElement = document.querySelector('.slider__block-desc-list');
    const priceElement = document.querySelector('.slider__block-desc-price');
    const oldPrice = document.querySelector('.slider__block-desc-old-price');
    const currentNumberElement = document.querySelector('.slider__control-numbers-current');
    const descElement = document.querySelector('.slider__block-desc-slide');

    descElement.classList.add('slider__block-desc-slide--fade-out');
    setTimeout(() => {
        const slide = slides[currentSlideIndex];
        subtitleElement.textContent = slide.subtitle;
        priceElement.innerHTML = slide.price;
        oldPrice.innerHTML = slide.oldPrice;
        listElement.innerHTML = '';
        slide.list.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('slider__block-desc-list-item');
            li.textContent = item;
            listElement.appendChild(li);
        });
        currentNumberElement.textContent = currentSlideIndex + 1;
        descElement.classList.remove('slider__block-desc-slide--fade-out');
        descElement.classList.add('slider__block-desc-slide--fade-in');
        setTimeout(() => {
            descElement.classList.remove('slider__block-desc-slide--fade-in');
        }, animationDuration);

    }, animationDuration);
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide();
}

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
document.addEventListener('DOMContentLoaded', () => {
    updateSlide();
});

document.querySelector('.popup__form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const formData = new FormData(this); 
    
    fetch('http://stasyapl.beget.tech/index.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())  
    .then(result => {
        if (result.trim() === 'Success') {
            alert('Сообщение успешно отправлено!');
            document.querySelector('.popup__form textarea').value = '';  
        } else {
            alert('Ошибка при отправке сообщения. Попробуйте еще раз.');
        }
        popup.classList.remove('active'); 
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
    });
});
