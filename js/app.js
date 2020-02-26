import resume from './ui/resume.js'
import portfolio from './ui/portfolio.js'
import contact from './ui/contact.js';
import curriculum from './data.js';


// First load - show spinner 1.5s
setTimeout(() => {
    document.querySelector('#spinner').classList.add('displayNone');
    document.querySelector('#header').classList.remove('displayNone');
    document.querySelector('#divisor').classList.remove('displayNone');
    document.querySelector('#firstBody').classList.remove('displayNone');
}, 1500);

const bodyContent = document.querySelector('#bodyContent');
bodyContent.innerHTML = portfolio(curriculum);
let currentMenu = 'portfolio';

// const changeTheme = () => {
//     console.log('Clic en cambio de tema')
//     document.documentElement.style.setProperty('--blue-color-1', '#FF701E');
//     document.documentElement.style.setProperty('--blue-color-2', '#FF8228');
//     document.documentElement.style.setProperty('--blue-color-3', '#FF9C56');
// }

const changeContentBody = (content) => {
    // Show current menu
    if (content != currentMenu) {
        bodyContent.classList.remove("bounceInRight");
        bodyContent.classList.add("bounceOutLeft");
        let activeMenu = document.querySelectorAll(".currentMenu");
        activeMenu.forEach( (e, i) => {
            activeMenu[i].classList.remove("currentMenu");
        })
        document.querySelector(`#${content}`).classList.add("currentMenu");
        setTimeout(() => {
            if (content === 'home') {
                bodyContent.innerHTML = home;
                currentMenu = 'home';
            } else if (content === 'resume') {
                bodyContent.innerHTML = resume(curriculum);
                currentMenu = 'resume';
            } else if (content === 'portfolio') {
                bodyContent.innerHTML = portfolio(curriculum);
                currentMenu = 'portfolio';
            } else if (content === 'contact') {
                bodyContent.innerHTML = contact;
                currentMenu = 'contact';
            }
            bodyContent.classList.remove("bounceOutLeft");
            bodyContent.classList.add("bounceInRight");
        }, 500);
    }
}

document.querySelector('#resume').addEventListener('click', function () {changeContentBody('resume')});
document.querySelector('#portfolio').addEventListener('click', function () {changeContentBody('portfolio')});
document.querySelector('#contact').addEventListener('click', function () {changeContentBody('contact')});
// document.querySelector('#switchTheme').addEventListener('click', function() {changeTheme()});