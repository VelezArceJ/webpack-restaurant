function createContact() {
    const contact = document.createElement('section');
    contact.classList.add('section');
    contact.setAttribute('id', 'first-section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'Contact Us';

    const p1 = document.createElement('p');
    p1.classList.add('section-para');
    p1.textContent = 'Phone: 719 488 5659';

    const p2 = document.createElement('p');
    p2.classList.add('section-para');
    p2.textContent = 'Email: NonnaGM@ciao.com';

    contact.appendChild(title);
    contact.appendChild(p1);
    contact.appendChild(p2);

    return contact;
}

function loadContact() {
    const content = document.querySelector('#content');

    const contact = createContact();
    content.appendChild(contact);
}

export default loadContact;