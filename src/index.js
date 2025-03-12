import "./styles.css";
import { Pageload } from "./pageload.js";
import {Home} from "./home.js";
import {Menu} from "./menu.js";
import {Contact} from "./contact.js";


console.log("123345");
console.log("Home:", Home);
console.log("Menu:", Menu);
console.log("Contact:", Contact);
document.addEventListener("DOMContentLoaded",()=>{
    Pageload();
    const homebtn = document.getElementById("home");
    console.log(`homee`);
    if(homebtn){
        homebtn.addEventListener("click",Home);
    }
    else{
        console.log(`home error`);
    }
    const menubtn = document.getElementById("menu");
    if(menubtn){
        menubtn.addEventListener("click",Menu);
    }
    else{
        console.log(`menu error`);
    }
    
    
    const contactbtn = document.getElementById("contact");
    if(contactbtn){
        contactbtn.addEventListener("click",Contact);
    }
    else{
        console.log(`contact error`);
    }
})
