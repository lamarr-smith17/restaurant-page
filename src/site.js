import './styles.scss';
import { loadMenu as Menu } from './menu';
import { loadContact as Contact } from './contact';
import { loadHome as Home} from './home';
function createHeader()
{
    
    const headerContainer = document.createElement('header');
    headerContainer.classList.add("header-container");

    const cafeTitle = document.createElement('h1');
    cafeTitle.textContent = "Cafe Pochita";
    cafeTitle.classList.add("cafe-name")
     
    headerContainer.appendChild(cafeTitle);
    headerContainer.appendChild(createNavBar());
    
    return headerContainer;
}
function createMain()
{
    const mainDiv = document.createElement('div');
    mainDiv.classList.add("main-contianer"); 
    mainDiv.id = "main";

    return mainDiv;

}
function createNavBar()
{
    const navbar = document.createElement('nav');
    navbar.id = "sideNavBar";
    
    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.classList.add("button-styles");
    homeButton.addEventListener("click", ()=> {
        addActiveState(homeButton);
        Home();
    })

    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.classList.add("button-styles");
    menuButton.addEventListener("click", ()=>{
        addActiveState(menuButton);
        Menu();
    })

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact Us";
    contactButton.classList.add("button-styles");
    contactButton.addEventListener("click", ()=>{
        addActiveState(contactButton);
        Contact();
    })

    
    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);
    return navbar;
}
function addActiveState(button)
{
    const buttons = document.querySelectorAll(".button-styles");
    buttons.forEach(button => {
        if(button !== this)
        {
            button.classList.remove("active")
        }
    });;
    button.classList.add("active");
}
function intializeHome()
{
    const cd = document.getElementById('content');
    
    cd.append(createHeader());
    cd.append(createMain());
}


export {
    intializeHome
}