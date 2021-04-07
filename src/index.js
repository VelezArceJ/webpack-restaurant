import loadHome from './modules/home';
import loadPage from './modules/initial-page-load';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

function addEvents() {
    let homebtn = document.querySelector('#home');
    let menubtn = document.querySelector('#menu');
    let contactbtn = document.querySelector('#contact');

    homebtn.addEventListener('click', tabChange);
    menubtn.addEventListener('click', tabChange);
    contactbtn.addEventListener('click', tabChange);
}

initPageLoad();

function initPageLoad () {
    loadPage();
    loadHome();
    addEvents();
}

function tabChange() {
    let section = document.querySelector('section');
    
    while(section) {
        section.remove();
        section = document.querySelector('section');
    }

    if(event.target.innerHTML == 'CONTACT') {
        loadContact();
        console.log('test');
    } else if(event.target.innerHTML == 'HOME') {
        loadHome();
    } else {
        loadMenu();
    }
}