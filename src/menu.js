
export function Menu(){
    const contentdiv = document.getElementById("content");
    contentdiv.innerHTML=" ";
        const menudiv = document.createElement("div");
        const div1 = document.createElement("div");
        div1.textContent ="Menu";
        
        div1.setAttribute("style","font-size: 3rem; font-family: 'Pacifico', cursive; text-align: center;");
        
        const div2 = document.createElement("div");
        div2.setAttribute("style","height:5rem; width:10rem; background-color:gold;position:relative; left:5rem; top:2rem;margin:1rem;padding:1rem;border-radius:50px;");
        div2.textContent = "Beverage";
        const ul = document.createElement("ul");
        const items = ["tea","coffee","mojito"];
        items.forEach(item=>{
            let li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        })
        div2.appendChild(ul);
        const div3 = document.createElement("div");
        div3.textContent = "Sides";
        div3.setAttribute("style","height:5rem; width:20rem; background-color:gold;position:relative; left:5rem; top:2rem;margin:1rem;padding:1rem;border-radius:50px;");
        const uul = document.createElement("ul");
        const food = ["toast and jam","fruit"];
        food.forEach(item=>{
            let li = document.createElement("li");
            li.textContent = item;
            uul.appendChild(li);
        })
        div3.appendChild(uul);
        const div4 = document.createElement("div");
        div4.textContent = "Main Course";
        div4.setAttribute("style","height:5rem; width:20rem; background-color:gold;position:relative; left:5rem; top:2rem;margin:1rem;padding:1rem;border-radius:50px;");
        const uuul = document.createElement("ul");
        const morefood = ["biryani","pizza","burger"];
        morefood.forEach(item=>{
            let li = document.createElement("li");
            li.textContent = item;
            uuul.appendChild(li);
        })
        div4.appendChild(uuul);
        
        menudiv.appendChild(div1);
        menudiv.appendChild(div2);
        menudiv.appendChild(div3);
        menudiv.appendChild(div4);
        contentdiv.appendChild(menudiv);
}
