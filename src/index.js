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
const button = document.querySelector('.slider__block-desc-btns-2');

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

document.querySelector('.popup__form').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    const formData = new FormData(this); // Собираем данные формы

    // Отправляем запрос через fetch
    fetch('http://localhost:8000/index.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Получаем ответ от сервера в виде текста
    .then(data => {
        console.log("Ответ от сервера:", data); // Выводим ответ в консоль или используем его на странице
        // Здесь можно показать пользователю сообщение о том, что данные были успешно отправлены
        alert("Данные успешно отправлены!");
    })
    .catch(error => {
        console.error('Ошибка:', error); // Обработка ошибок
        alert("Произошла ошибка при отправке данных.");
    });
});


updateMenuDisplay();


window.addEventListener('resize', updateMenuDisplay);