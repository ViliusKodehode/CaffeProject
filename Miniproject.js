//////////////////////////////////////////////////////////////////////////////////
// header 

const header = document.createElement('div');
header.className = "header";
document.body.appendChild(header);

const logo = document.createElement('div');
logo.className = "logo";

const logoimage = document.createElement('img');
logoimage.src = "Pictures/Logo.png";
logoimage.alt = "Logo";
logoimage.style.width = "150px"; 
logoimage.style.height = "150px";
logoimage.style.transition = "transform 0.5s ease"
logo.appendChild(logoimage);
header.appendChild(logo);

logoimage.addEventListener('mouseenter', () => {
    logoimage.style.transform = "rotate(360deg) scale(1.2)";
});
logoimage.addEventListener('mouseleave',() => {
    logoimage.style.transform = "rotate(0deg) scale(1)";
});

const navbar = document.createElement('div');
navbar.className = "navbar";
header.appendChild(navbar);

const navbaritems = ["Breakfast","Lunch", "Dinner", "Drinks"];
navbaritems.forEach(item => {
    const navbaritem = document.createElement('div');
    navbaritem.className = "navbaritem";
    navbaritem.textContent = item;
    navbar.appendChild(navbaritem);
});

//header
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////
// mainframe

const mainframe = document.createElement('div');
mainframe.className = "mainframe";
document.body.appendChild(mainframe);

document.addEventListener(`DOMContentLoaded`, () => {
    const mainframe = document.querySelector(`.mainframe`);
    const headline = document.createElement(`h1`);
    headline.textContent = `Purr & Pour Caffe`;
    mainframe.appendChild(headline);
    const textcaffe = document.createElement(`p`);
    textcaffe.textContent =
              "Inside Purr & Pour Caffe, homeless cats roam freely, waiting for your love and companionship. Enjoy your coffee while petting these adorable cats, and if you feel a special bond, you can give one of them a forever home.";
    mainframe.append(textcaffe);          
});

const breakfast = [
    {
    name: "Purrfect Pancakes",
    description: "Fluffy pancakes topped with whipped cream, fresh berries, and a drizzle of maple syrup.",
    price: "25.00 kr",
    image: `Pictures/pancakes.jpg`
    },
    {
    name: "Kitten Kaboodle",
    description: "A colorful breakfast bowl with yogurt, granola, and fresh fruit.",
    price: "25.00 kr",
    image: `Pictures/Yougurt.jpg`
    },
    {
    name: "Meow Mix Muffin",
    description: "A savory breakfast muffin filled with eggs, cheese, and your choice of meat (bacon, sausage, or ham).",
    price: "25.00 kr",
    image: `Pictures/muffin.jpg`
    },
    {
    name: "Whiskers Waffle",
    description: "A crispy waffle topped with whipped cream, fresh berries, and a dusting of powdered sugar.",
    price: "25.00 kr",
    image: `Pictures/waffle.jpg`
    },
    {
    name: "Feline Frittata",
    description: "A hearty frittata filled with vegetables, cheese, and your choice of meat.",
    price: "25.00 kr",
    image: `Pictures/fritata.jpg`
    },
    {
    name: "Cat Nap Cereal",
    description: "A bowl of cereal with milk, topped with a dollop of whipped cream and a sprinkle of cinnamon.",
    price: "25.00 kr",
    image: `Pictures/cereal.jpg`
    },
];

const lunch = [
    {
    name: "Pawsitively Perfect Salad",
    description: "A fresh salad with mixed greens, cherry tomatoes, cucumbers, and a creamy dressing.",
    price: "25.00 kr",
    image: `Pictures/salad.jpg`
    },
    {
    name: "Kitten Kabob",
    description: "Skewered grilled chicken or vegetables with a side of rice and a dipping sauce.",
    price: "25.00 kr",
    image: `Pictures/chicken.jpg`
    },
    {
    name: "Purrfect Panini",
    description: "A grilled panini sandwich with your choice of fillings, such as ham, cheese, and tomato.",
    price: "25.00 kr",
    image: `Pictures/sandwitch.jpg`
    },
    {
    name: "Whiskers Wrap",
    description: "A flavorful wrap filled with grilled chicken, lettuce, tomato, and a creamy dressing.",
    price: "25.00 kr",
    image: `Pictures/chickenwrap.jpg`
    },
    {
    name: "Feline Feast Soup",
    description: "A hearty soup, such as tomato soup or chicken noodle soup, served with a side of crusty bread.",
    price: "25.00 kr",
    image: `Pictures/soup.jpg`
    },
    {
    name: "Cat Nap Cookie",
    description: "A delicious cookie, such as a chocolate chip or oatmeal raisin cookie, for a sweet treat.",
    price: "25.00 kr",
    image: `Pictures/cookie.jpg`
    },
];

const dinner = [
    {
    name: "Pawsitively Perfect Pasta",
    description: "A creamy pasta dish with your choice of sauce and toppings, such as marinara, Alfredo, or pesto.",
    price: "25.00 kr",
    image: `Pictures/pasta.jpg`
    },
    {
    name: "Kitten Kabob Kebab",
    description: "Skewered grilled meat or vegetables with a side of rice pilaf and a tzatziki sauce.",
    price: "25.00 kr",
    image: `Pictures/kabob.jpg`
    },
    {
    name: "Purrfect Pot Pie",
    description: "A hearty pot pie filled with chicken, vegetables, and a creamy gravy.",
    price: "25.00 kr",
    image: `Pictures/pie.jpg`
    },
    {
    name: "Whiskers Wrap Wrap",
    description: "A flavorful wrap filled with grilled steak, peppers, onions, and cheese.",
    price: "25.00 kr",
    image: `Pictures/wrapwrap.jpg`
    },
    {
    name: "Feline Feast Fish",
    description: "Grilled or baked fish with a side of roasted vegetables.",
    price: "25.00 kr",
    image: `Pictures/fish.jpg`
    },
    {
    name: "Cat Nap Cake",
    description: "A decadent dessert, such as a chocolate cake or cheesecake, for a sweet ending to your meal.",
    price: "25.00 kr",
    image: `Pictures/choclatecake.jpg`
    },
];

const drinks = [
    {
    name: "Pawsitively Perfect Punch",
    description: "A refreshing fruit punch with a tropical twist.",
    price: "25.00 kr",
    image: `Pictures/drink1.jpg`
    },
    {
    name: "Kitten Kaboodle Cocktail",
    description: "A sweet and tart cocktail with vodka, cranberry juice, and lime juice.",
    price: "25.00 kr",
    image: `Pictures/drink2.jpg`
    },
    {
    name: "Purrfect Peppermint Mocha",
    description: "A creamy and decadent hot chocolate with peppermint flavor.",
    price: "25.00 kr",
    image: `Pictures/drink3.jpg`
    },
    {
    name: "Whiskers White Hot Chocolate",
    description: "A rich and creamy white hot chocolate topped with whipped cream and chocolate shavings.",
    price: "25.00 kr",
    image: `Pictures/drink4.jpg`
    },
    {
    name: "Feline Fizz Lemonade",
    description: "A classic lemonade with a twist of lemon-lime soda.",
    price: "25.00 kr",
    image: `Pictures/drink5.jpg`
    },
    {
    name: "Cat Nap Coffee",
    description: "A strong cup of coffee to help you wake up and start your day.",
    price: "25.00 kr",
    image: `Pictures/drink6.jpg`
    },
];

function displaybreakfast() {
    const mainframediv = document.querySelector(`.mainframe`);
    //mainframediv.innerHTML = "";
    mainframediv.textContent = "";
    mainframediv.style.marginTop = "20px";

    const headbreakfast = document.createElement("h2");
    headbreakfast.textContent = "Breakfast Menu";
    headbreakfast.style.textAlign = "center";
    headbreakfast.style.color = "#333";
    headbreakfast.style.marginBottom = "30px";
    headbreakfast.style.fontSize = "2rem";
    mainframediv.appendChild(headbreakfast);

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.gap = "20px";
    mainframe.appendChild(container);

    breakfast.forEach((item, index) => {
        const items = document.createElement('div');
        items.style.display = "flex";
        items.style.flexDirection = index % 2 === 0 ? "row" : "row-reverse";
        //items.style.flexWrap = "wrap";
        items.style.alignItems = "center";
        items.style.gap = "20px";
        items.style.width = "100%";
        items.style.maxWidth = "800px";
        items.style.padding = "20px";
        items.style.border = "1px solid #ddd";
        items.style.borderRadius = "10px";
        items.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        items.style.backgroundColor = "#fff";

        const img = document.createElement(`img`);
        img.src = item.image;
        img.alt = item.name;
        img.style.height = "100px";
        img.style.width = "auto";
        img.style.borderRadius = "8px";
        img.style.transition = "transform 0.3s ease";
        img.addEventListener ("mouseenter", () => {
            img.style.transform = "scale(1.8)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
        items.appendChild(img);

        const textcontainer = document.createElement('div');
        textcontainer.style.display = "flex";
        textcontainer.style.flexDirection = "column";
        // textcontainer.style. flexWrap = "wrap";
        textcontainer.style.justifyContent = "center";

        const name = document.createElement('h3');
        name.textContent = item.name;
        name.style.margin = "0";
        name.style.color = "#333";
        name.style.fontSize = "1.5rem";

        const description = document.createElement('p');
        description.textContent = item.description;
        description.style.margin = "10px 0";
        description.style.color = "#555";
        description.style.fontSize = "1 rem";

        const price = document.createElement ('p');
        price.textContent =item.price;
        price.style.margin = "0";
        price.style.color = "#ff6347";
        price.style.fontWeight = "bold";
        price.style.fontSize = "1.2 rem";

        textcontainer.appendChild(name);
        textcontainer.appendChild(description);
        textcontainer.appendChild(price);
        items.appendChild(textcontainer);

        container.appendChild(items);
    });
} 
document.querySelectorAll(`.navbaritem`).forEach((item) => {
    if (item.textContent === "Breakfast") {
        item.addEventListener(`click`, displaybreakfast);
    }
});

function displaylunch() {
    const mainframediv = document.querySelector(`.mainframe`);
    //mainframediv.innerHTML = "";
    mainframediv.textContent = "";
    mainframediv.style.marginTop = "20px";

    const headlunch = document.createElement("h2");
    headlunch.textContent = "Lunch Menu";
    headlunch.style.textAlign = "center";
    headlunch.style.color = "#333";
    headlunch.style.marginBottom = "30px";
    headlunch.style.fontSize = "2rem";
    mainframediv.appendChild(headlunch);

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.gap = "20px";
    mainframe.appendChild(container);

    lunch.forEach((item, index) => {
        const items = document.createElement('div');
        items.style.display = "flex";
        items.style.flexDirection = index % 2 === 0 ? "row" : "row-reverse";
        items.style.alignItems = "center";
        items.style.gap = "20px";
        items.style.width = "100%";
        items.style.maxWidth = "800px";
        items.style.padding = "20px";
        items.style.border = "1px solid #ddd";
        items.style.borderRadius = "10px";
        items.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        items.style.backgroundColor = "#fff";

        const img = document.createElement(`img`);
        img.src = item.image;
        img.alt = item.name;
        img.style.height = "100px";
        img.style.width = "auto";
        img.style.borderRadius = "8px";
        img.style.transition = "transform 0.3s ease";
        img.addEventListener ("mouseenter", () => {
            img.style.transform = "scale(1.8)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
        items.appendChild(img);

        const textcontainer = document.createElement('div');
        textcontainer.style.display = "flex";
        textcontainer.style.flexDirection = "column";
        textcontainer.style.justifyContent = "center";

        const name = document.createElement('h3');
        name.textContent = item.name;
        name.style.margin = "0";
        name.style.color = "#333";
        name.style.fontSize = "1.5rem";

        const description = document.createElement('p');
        description.textContent = item.description;
        description.style.margin = "10px 0";
        description.style.color = "#555";
        description.style.fontSize = "1 rem";

        const price = document.createElement ('p');
        price.textContent =item.price;
        price.style.margin = "0";
        price.style.color = "#ff6347";
        price.style.fontWeight = "bold";
        price.style.fontSize = "1.2 rem";

        textcontainer.appendChild(name);
        textcontainer.appendChild(description);
        textcontainer.appendChild(price);
        items.appendChild(textcontainer);

        container.appendChild(items);
    });
} 
document.querySelectorAll(`.navbaritem`).forEach((item) => {
    if (item.textContent === "Lunch") {
        item.addEventListener(`click`, displaylunch);
    }
});

function displaydinner() {
    const mainframediv = document.querySelector(`.mainframe`);
    //mainframediv.innerHTML = "";
    mainframediv.textContent = "";
    mainframediv.style.marginTop = "20px";

    const headdinner = document.createElement("h2");
    headdinner.textContent = "Dinner Menu";
    headdinner.style.textAlign = "center";
    headdinner.style.color = "#333";
    headdinner.style.marginBottom = "30px";
    headdinner.style.fontSize = "2rem";
    mainframediv.appendChild(headdinner);

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.gap = "20px";
    mainframe.appendChild(container);

    dinner.forEach((item, index) => {
        const items = document.createElement('div');
        items.style.display = "flex";
        items.style.flexDirection = index % 2 === 0 ? "row" : "row-reverse";
        items.style.alignItems = "center";
        items.style.gap = "20px";
        items.style.width = "100%";
        items.style.maxWidth = "800px";
        items.style.padding = "20px";
        items.style.border = "1px solid #ddd";
        items.style.borderRadius = "10px";
        items.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        items.style.backgroundColor = "#fff";

        const img = document.createElement(`img`);
        img.src = item.image;
        img.alt = item.name;
        img.style.height = "100px";
        img.style.width = "auto";
        img.style.borderRadius = "8px";
        img.style.transition = "transform 0.3s ease";
        img.addEventListener ("mouseenter", () => {
            img.style.transform = "scale(1.8)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
        items.appendChild(img);

        const textcontainer = document.createElement('div');
        textcontainer.style.display = "flex";
        textcontainer.style.flexDirection = "column";
        textcontainer.style.justifyContent = "center";

        const name = document.createElement('h3');
        name.textContent = item.name;
        name.style.margin = "0";
        name.style.color = "#333";
        name.style.fontSize = "1.5rem";

        const description = document.createElement('p');
        description.textContent = item.description;
        description.style.margin = "10px 0";
        description.style.color = "#555";
        description.style.fontSize = "1 rem";

        const price = document.createElement ('p');
        price.textContent =item.price;
        price.style.margin = "0";
        price.style.color = "#ff6347";
        price.style.fontWeight = "bold";
        price.style.fontSize = "1.2 rem";

        textcontainer.appendChild(name);
        textcontainer.appendChild(description);
        textcontainer.appendChild(price);
        items.appendChild(textcontainer);

        container.appendChild(items);
    });
} 
document.querySelectorAll(`.navbaritem`).forEach((item) => {
    if (item.textContent === "Dinner") {
        item.addEventListener(`click`, displaydinner);
    }
});

function displaydrinks() {
    const mainframediv = document.querySelector(`.mainframe`);
    //mainframediv.innerHTML = "";
    mainframediv.textContent = "";
    mainframediv.style.marginTop = "20px";

    const headdrinks = document.createElement("h2");
    headdrinks.textContent = "Drinks Menu";
    headdrinks.style.textAlign = "center";
    headdrinks.style.color = "#333";
    headdrinks.style.marginBottom = "30px";
    headdrinks.style.fontSize = "2rem";
    mainframediv.appendChild(headdrinks);

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.gap = "20px";
    mainframe.appendChild(container);

    drinks.forEach((item, index) => {
        const items = document.createElement('div');
        items.style.display = "flex";
        items.style.flexDirection = index % 2 === 0 ? "row" : "row-reverse";
        items.style.alignItems = "center";
        items.style.gap = "20px";
        items.style.width = "100%";
        items.style.maxWidth = "800px";
        items.style.padding = "20px";
        items.style.border = "1px solid #ddd";
        items.style.borderRadius = "10px";
        items.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        items.style.backgroundColor = "#fff";

        const img = document.createElement(`img`);
        img.src = item.image;
        img.alt = item.name;
        img.style.height = "100px";
        img.style.width = "auto";
        img.style.borderRadius = "8px";
        img.style.transition = "transform 0.3s ease";
        img.addEventListener ("mouseenter", () => {
            img.style.transform = "scale(1.8)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
        items.appendChild(img);

        const textcontainer = document.createElement('div');
        textcontainer.style.display = "flex";
        textcontainer.style.flexDirection = "column";
        textcontainer.style.justifyContent = "center";

        const name = document.createElement('h3');
        name.textContent = item.name;
        name.style.margin = "0";
        name.style.color = "#333";
        name.style.fontSize = "1.5rem";

        const description = document.createElement('p');
        description.textContent = item.description;
        description.style.margin = "10px 0";
        description.style.color = "#555";
        description.style.fontSize = "1 rem";

        const price = document.createElement ('p');
        price.textContent = item.price;
        price.style.margin = "0";
        price.style.color = "#ff6347";
        price.style.fontWeight = "bold";
        price.style.fontSize = "1.2 rem";

        textcontainer.appendChild(name);
        textcontainer.appendChild(description);
        textcontainer.appendChild(price);
        items.appendChild(textcontainer);

        container.appendChild(items);
    });
} 
document.querySelectorAll(`.navbaritem`).forEach((item) => {
    if (item.textContent === "Drinks") {
        item.addEventListener(`click`, displaydrinks);
    }
});

// Mainframe
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////
// Footer 

const footer = document.createElement('div');
footer.className = "footer";
document.body.appendChild(footer);

const copyright = document.createElement('div');
copyright.className = "copyright";
copyright.textContent = "© 2024 Purr & Pour Caffe";
footer.appendChild(copyright);

const contact = document.createElement('button');
contact.className = "contact";
contact.textContent = "Contact information";
footer.appendChild(contact);

function displaycontact() {
    const mainframediv = document.querySelector(`.mainframe`);
    //mainframediv.innerHTML = "";
    mainframediv.textContent = "";
    
    const container = document.createElement(`div`);
    container.style.flexDirection = "row";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "space-between";
    container.style.marginTop = "20px";
    container.style.padding = "20px";
    container.style.border = "1px solid #ddd";
    container.style.borderRadius = "10px";
    container.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    container.style.backgroundColor = "#fff";

    const image1 = document.createElement('img');
    image1.src = "Pictures/cat2.png";
    image1.alt = "left";
    image1.style.height = "400px";
    image1.style.width = "auto";
    image1.style.borderRadius = "8px";
    container.appendChild(image1);

    const infobox = document.createElement('div');
    infobox.style.textAlign = "center";
    infobox.style.flex = "1";
    infobox.style.margin = "0 20px"

    const title = document.createElement('h2');
    title.textContent = "Contact information";
    title.style.marginBottom = "40px";
    title.style.fontSize = "30px"
    title.style.color = '#333';
    infobox.appendChild(title);

    const location = document.createElement('p');
    location.className = "location";
    location.textContent = "Location: \n Nolands, streetnotfound 0";
    location.style.margin = "5px 0";
    location.style.color = "#555";
    infobox.appendChild(location);

    const email = document.createElement('p');
    email.className = "email";
    email.textContent = "Email: \n puffpuff@email.com ";
    email.style.margin = "5px 0";
    email.style.color = "#555";
    infobox.appendChild(email);

    const phone = document.createElement('p');
    phone.className = "phone"
    phone.textContent = "Telephone \n +48 55448899 ";
    phone.style.margin = "5px 0";
    phone.style.color = "#555";
    infobox.appendChild(phone);

    container.appendChild(infobox);

    const image2 = document.createElement('img');
    image2.src = "Pictures/cat1.png";
    image2.alt = "right";
    image2.style.height = "400px";
    image2.style.width = "auto";
    image2.style.borderRadius = "8px";
    container.appendChild(image2);

    mainframediv.appendChild(container);
};
contact.addEventListener('click', displaycontact);

const socialmedia = document.createElement('div');
socialmedia.className = "socialmedia";
footer.appendChild(socialmedia);

const icons = document.createElement('div');
icons.className = "icons";
icons.textContent = "Follow us on:"
socialmedia.appendChild(icons)

const socialicons = [
    {name: "Tiktok", url: "https://www.tiktok.com", icon: "Pictures/Tiktok.png"},
    {name: "Facebook", url: "https://www.facebook.com", icon: "Pictures/Facebook.png"},
    {name: "Instagram", url: "https://www.instagram.com", icon: "Pictures/Instagram.png"}
];

socialicons.forEach(link => {
    console.log("fdf")
    const icon = document.createElement('a');
    icon.href = link.url;
    icon.target = "_blank";
    icon.className = "socialicons";

    const img = document.createElement(`img`);
    img.src = link.icon;
    img.alt = link.name;
    // img.style.height = "30px";
    // img.style.width = "30px";

    icon.appendChild(img);
    socialmedia.appendChild(icon);  
});
footer.appendChild(socialmedia);

// Footer
//////////////////////////////////////////////////////////////////////////////////


