// Menu data arrays
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Using map() method for breakfast menu
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => {
    return `<div class="menu-item">${item}</div>`;
});

// Insert breakfast items into the DOM
document.getElementById('breakfast').innerHTML = breakfastMenuItemsHTML.join('');

// Using forEach() method for main course menu
let mainCourseHTML = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseHTML += `<div class="menu-item">${item}</div>`;
});

// Insert main course items into the DOM
document.getElementById('mainCourse').innerHTML = mainCourseHTML;

// Using for loop for dessert menu
let dessertHTML = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertHTML += `<div class="menu-item">${dessertMenu[i]}</div>`;
}

// Insert dessert items into the DOM
document.getElementById('dessert').innerHTML = dessertHTML;
