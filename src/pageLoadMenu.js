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

    const menuItemName = document.createElement('div');
    menuItemName.textContent = foodName;
    contentDiv.appendChild(menuItemName);
    const menuItemDesc = document.createElement('div');
    menuItemDesc.textContent = description;
    contentDiv.appendChild(menuItemDesc);
    const menuPrice = document.createElement('div');
    menuPrice.textContent = price;
    contentDiv.appendChild(menuPrice);
}

export {populatePageMenu};