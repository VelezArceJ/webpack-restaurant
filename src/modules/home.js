function createAbout () {
    const about = document.createElement('section');
    about.classList.add('section');
    about.setAttribute('id', 'first-section')

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'About';

    const p1 = document.createElement('p');
    p1.classList.add('section-para');
    p1.textContent = `Food is a labor of love and here at Ciao! we believe that there is nothing like the love in the food from Nonna's kitchen. That's why we take those same, wonderful ladies and have them share the love with those who seek the tasties pleasures in life.`

    about.appendChild(title);
    about.appendChild(p1);

    return about;
}

function createCovidRestrictions () {
    const restrictions = document.createElement('section');
    restrictions.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'COVID-19 Restrictions';

    const p1 = document.createElement('p');
    p1.classList.add('section-para');
    p1.textContent = 'We are taking COVID-19 seriously. We have a few rules that we ask you please follow for the safety of our customers and our staff.'

    const ul = document.createElement('ul');
    ul.classList.add('section-ul');

    const li1 = document.createElement('li');
    li1.classList.add('section-li');
    li1.textContent = 'Please wear your mask at all times.'
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.classList.add('section-li');
    li2.textContent = 'Please stay 6 feet away from people at all times.'
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.classList.add('section-li');
    li3.textContent = 'Maximum party size is eight people.'
    ul.appendChild(li3);

    const p2 = document.createElement('p');
    p2.classList.add('section-para');
    p2.textContent = 'We appreciate every step you take to lower the curve. Anyone who refuses to follow the rules will be asked to leave.'

    restrictions.appendChild(title);
    restrictions.appendChild(p1);
    restrictions.appendChild(ul);
    restrictions.appendChild(p2);

    return restrictions;
}

function createDonation () {
    const donation = document.createElement('section');
    donation.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'Donations'

    const p1 = document.createElement('p');
    p1.classList.add('section-para')
    p1.textContent = 'As we all know, COVID-19 has made 2020 a difficult year for many people, families, and small businesses. We have been luckier than others and give assistance to those in need. The best donation anyone can give is your time and labor but anything helps. We accept food donations and, of course, cash donations. If you would like more details about our donations, please call our donation station at (555)-888-8008 or email us at donation.station@ciaohelps.com.'

    donation.appendChild(title);
    donation.appendChild(p1);

    return donation;
}

function loadHome () {
    const content = document.querySelector('#content');

    const about = createAbout();
    content.appendChild(about);

    const restrictions = createCovidRestrictions();
    content.appendChild(restrictions);

    const donation = createDonation();
    content.appendChild(donation);
}

export default loadHome;