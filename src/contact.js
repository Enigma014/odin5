export function Contact(){
    
    const contentdiv = document.getElementById("content");
    contentdiv.innerHTML=" ";
        const menudiv = document.createElement("div");
        const div1 = document.createElement("div");

        div1.textContent = "Contact us";
        div1.setAttribute("style","font-size:40px;position:relative;left:5rem;");
        
        const div2 = document.createElement("div");
        div2.setAttribute("style","height:5rem; width:20rem; background-color:gold; position:relative; left:5rem; top:2rem;margin:1rem;padding:1rem;border-radius:50px;");
        div2.textContent = `Mama bear 9419087879`;

        const div3 = document.createElement("div");
        div3.setAttribute("style","height:5rem; width:20rem; background-color:gold;position:relative; left:5rem; top:2rem;margin:1rem;padding:1rem;border-radius:50px;");
        div3.textContent = "Papa bear 9419089089";
        

        const div4 = document.createElement("div");
        div4.setAttribute("style","height:5rem; width:20rem; background-color:gold;position:relative; left:5rem; top:2rem;margin:1rem;padding:1rem;border-radius:50px;");
        div4.textContent = "Baby bear 7889537808";

        
        menudiv.appendChild(div1);
        menudiv.appendChild(div2);
        menudiv.appendChild(div3);
        menudiv.appendChild(div4);
        contentdiv.appendChild(menudiv);
}
