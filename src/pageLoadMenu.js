let menu = [];

let populatePageMenu = () => {
    createMenuItem("Pozole","A hearty soup, I think?","$4.50");
    createMenuItem("Spaghetti","Classic Spag Dish","$18.99");
    createMenuItem("Eggplant Parm","Advanced spaghetti dish with Eggplant","$23.99");
}

let createMenuItem = (foodName, description, price) => {

    class menuItem {
        constructor(name,desc,price){
            this.name = name;
            this.desc = desc;
            this.price = price;
        }
    }

    const newItem = new menuItem(foodName, description, price);
    menu.push(newItem);

    console.log("new item added");
    console.log(menu);

    const contentDiv = document.getElementById('content');
    const menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');


    const menuItemName = document.createElement('div');
    menuItemName.textContent = foodName;
    menuItemName.classList.add("menuText");
    menuCard.appendChild(menuItemName);
    const menuItemDesc = document.createElement('div');
    menuItemDesc.textContent = description;
    menuItemDesc.classList.add("menuText");
    menuCard.appendChild(menuItemDesc);
    const menuPrice = document.createElement('div');
    menuPrice.textContent = price;
    menuPrice.classList.add("menuPrice");
    menuCard.appendChild(menuPrice);

    contentDiv.appendChild(menuCard);
}

export {populatePageMenu};