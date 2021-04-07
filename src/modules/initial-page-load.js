function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id)

    const logo = document.createElement('h1');
    logo.textContent = text;

    header.appendChild(logo);

    return header;
}

function createButton(id, text) {
    const button = document.createElement('button');
    button.setAttribute('id', id);

    const span = document.createElement('span');
    span.textContent = text;

    button.appendChild(span);
    button.classList.add('tab');

    return button;
}

function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = createButton('home', 'HOME');
    const menuBtn = createButton('menu', 'MENU');
    const contactBtn = createButton('contact', 'CONTACT');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    
    return main;
}

function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    
    const h3 = document.createElement('h3');
    h3.textContent = text;

    footer.appendChild(h3);

    return footer;
}

function loadPage() {
    const content = document.querySelector('#content');

    const header = createHeader('header', 'Ciao!');
    content.appendChild(header);

    const nav = createNav('nav');
    header.appendChild(nav);

    const tabContent = createMain('tabContent');
    content.appendChild(tabContent);

    const footer = createFooter('footer', 'Made with the love of your Nonna!');
    content.appendChild(footer);
}

export default loadPage;