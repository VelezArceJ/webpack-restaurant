function createAppetizers() {
    const apps = document.createElement('section');
    apps.classList.add('section');
    apps.setAttribute('id', 'first-section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'Appetizers';

    apps.appendChild(title);

    return apps;
};

function createSandwiches() {
    const sand = document.createElement('section');
    sand.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'Sandwiches';

    sand.appendChild(title);

    return sand;
};

function createPasta() {
    const pasta = document.createElement('section');
    pasta.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'Pasta';

    pasta.appendChild(title);

    return pasta;
};

function createMenuItem(name, description, prices) {
    const article = document.createElement('article');
    article.classList.add('menu-item');
    
    const title = document.createElement('h4');
    title.classList.add('item-name');
    title.textContent = name;

    const desc = document.createElement('p');
    desc.classList.add('item-desc');
    desc.textContent = description;

    const price = document.createElement('p');
    price.classList.add('item-price');
    price.textContent = prices;

    article.appendChild(title);
    article.appendChild(desc);
    article.appendChild(price);

    return article;
}

function loadMenu() {
    const content = document.querySelector('#content');

    const app = createAppetizers();
        const app1 = createMenuItem('Bruschetta', 'Italian bread toasted and infused with garlic. Topped with tomatoes, basil, and drizzled with EVOO.', '5');
    app.appendChild(app1);
        const app2 = createMenuItem('Calamari', 'Calamari rings and tentacles fried to perfection. Served with a wedge of lemon.', '7');
    app.appendChild(app2);
        const app3 = createMenuItem('Eggplant Fries', 'Eggplant spears breaded and fried to perfection. Served with our house made parmigiano-garlic aioli.', '7');
    app.appendChild(app3);
        content.appendChild(app);

    const sand = createSandwiches();
        const sand1 = createMenuItem('Meatball', 'Our house-made italian meatballs, melted provolone, zesty marinara, and italian seasonings on our homemade bread.', '10');
    sand.appendChild(sand1);
        const sand2 = createMenuItem('Sausage and Pepper', 'Sausage with freshly roasted green peppers and onions.', '10');
    sand.appendChild(sand2);
        const sand3 = createMenuItem('Chicken Parmigiana', 'Our delicious cutlets topped with sauce and mozzarella cheese on a bun.', '10');
    sand.appendChild(sand3);
        content.appendChild(sand);

    const pasta = createPasta();
        const pasta1 = createMenuItem('Fettuccine Alla Panna', 'Hand made egg fettucine folded into a delicate and creamy parmigiano reggiano sauce.', '10');
    pasta.appendChild(pasta1);
        const pasta2 = createMenuItem('Penne San Marino', 'Penne pasta sauteed in EVOO with artichokes, roasted garlic, and mushrooms all in a fresh tomato sauce.', '8');
    pasta.appendChild(pasta2);
        const pasta3 = createMenuItem('Linguine Con Pesto', 'Linguine pasta tossed with crushed garlic, pinenuts, basil leaves, parmigiano reggiano blended with EVOO.', '8');
    pasta.appendChild(pasta3);
        content.appendChild(pasta);
}

export default loadMenu;