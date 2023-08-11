import Bibi from "./imgs/bibimbap.jpg"
function addItems()
{
    const cafeItem = document.createElement("div");
    cafeItem.appendChild(createItems("Iced Latte", "Vanilla latte is here!", Bibi))
    
    return cafeItem;
}
function createItems(name, description, img)
{
    const itemDiv = document.createElement('div');
    const itemName = document.createElement('h2');
    const itemDescription = document.createElement('p');
    const itemImage = document.createElement('img');

    itemName.textContent = name;
    itemDescription.textContent = description;
    itemImage.src = img;

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemDescription);
    itemDiv.appendChild(itemImage);
    return itemDiv
}



function loadMenu()
{
    const main = document.getElementById('main');
    main.textContent = " ";
    main.append(addItems())
}
export {
    loadMenu
}