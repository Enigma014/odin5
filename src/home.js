
export function Home(){
    const contentdiv = document.getElementById("content");
    contentdiv.innerHTML=" ";
        const menudiv = document.createElement("div");
        const div1 = document.createElement("div");
        div1.textContent = "Beary's breakfast Bar";
        div1.setAttribute("style","font-size: 3rem; font-family: 'Pacifico', cursive; text-align: center;");
        
        const div2 = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = `Beary's has the best porridge! The atmosphere and customer service make you feel like you are
        sitting in the middle of the woods, eating like a bear! This is exactly the
        kind of place that I like to return to again and again.`;
        div2.setAttribute("style","height:10rem; width:25rem; background-color:gold;position:relative; left:5rem; top:2rem;margin:1rem;padding:1rem;border-radius:50px;");
        div2.appendChild(p);
        const div3 = document.createElement("div");
        div3.textContent = "Hours";
        div3.setAttribute("style","height:10rem; width:20rem; background-color:gold;position:relative; left:5rem; top:2rem;margin:1rem;padding:1rem;border-radius:50px;");
        const ul = document.createElement("ul");
        const items = ["Sunday: 8am - 8pm",

            "Monday: 6am - 6pm",
            
            "Tuesday: 6am - 6pm",
            
            "Wednesday: 6am - 6pm",
            
            "Thursday: 6am - 10pm",
            
            "Friday: 6am - 10pm",
            
            "Saturday: 8am - 10pm"];
        items.forEach(item=>{
            let li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        })
        div3.appendChild(ul);
        const div4 = document.createElement("div");
        div4.setAttribute("style","height:5rem; width:20rem; background-color:gold;position:relative; left:5rem; top:2rem;margin:1rem;padding:1rem;border-radius:50px;");
        div4.textContent = "Location:123 Forest Drive, Forestville, Maine";
        
        menudiv.appendChild(div1);
        menudiv.appendChild(div2);
        menudiv.appendChild(div3);
        menudiv.appendChild(div4);
        contentdiv.appendChild(menudiv);
}
