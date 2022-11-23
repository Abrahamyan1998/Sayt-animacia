let MODEST = document.querySelector(".mod");
let SERVICES = document.querySelector(".ser");
let FACTS = document.querySelector(".fac");
let PORTFOLIO = document.querySelector(".por");
let CLIENTS = document.querySelector(".cli");
let CONTACT = document.querySelector(".con");
let FOOTER = document.querySelector("footer");



let modestOpshin = document.querySelector(".modest");
let servicesOpshin = document.querySelector(".services");
let factsOpshin = document.querySelector(".facts");
let portfolioOpshin = document.querySelector(".portfolio");
let clientsOpshin = document.querySelector(".clients");
let contactOpshin = document.querySelector(".contact");
let footerOpshin = modestOpshin;
let btn = document.querySelectorAll(".btn");


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("dblclick",()=>{
        btn[i].style.width = 10+"px";
        btn[i].style.heigth = 10+"px";
        btn[i].classList.add("sircle");
        btn[i].innerText="";
        btn[i].style.background = "red";
    }) 
}
    

// MODEST.addEventListener("dblclick",()=>{
//         MODEST.style.width = 10+"px";
//         MODEST.style.heigth = 10+"px";
//         MODEST.classList.add("sircle");
//         MODEST.innerText="";
//         MODEST.style.background = "blue";
//     }) 



MODEST.onclick = function () {
    {
        modestOpshin.style.display = "block"
    }

     {
        servicesOpshin.style.display = "block"
    }

     {
        factsOpshin.style.display = "block"
    }

   {
        portfolioOpshin.style.display = "block"
    }

    {
        clientsOpshin.style.display = "block"
    }

    {
        contactOpshin.style.display = "block"
    }

}
MODEST.onmouseover = function () {
    console.log(onmouseover);
    MODEST.style.color="yellow";
}

MODEST.onmouseleave = function () {
    console.log(onmouseleave);
    MODEST.style.color="red";
}

SERVICES.addEventListener("mouseover", function () {
    SERVICES.style.color="red";

} )

SERVICES.addEventListener("mouseleave", function () {
    SERVICES.style.color="black";

} )

FACTS.addEventListener("mouseover", function () {
    FACTS.style.color="green";

} )

FACTS.addEventListener("mouseleave", function () {
    FACTS.style.color="white";

} )

PORTFOLIO.addEventListener("mouseover", function () {
    PORTFOLIO.style.color="yellow";

} )

PORTFOLIO.addEventListener("mouseleave", function () {
    PORTFOLIO.style.color="black";

} )

CLIENTS.addEventListener("mouseover", function () {
    CLIENTS.style.color="fuchsia";

} )

CLIENTS.addEventListener("mouseleave", function () {
    CLIENTS.style.color="white";

} )

CONTACT.addEventListener("mouseover", function () {
    CONTACT.style.color="blue";

} )

CONTACT.addEventListener("mouseleave", function () {
    CONTACT.style.color="black";

} )

SERVICES.onclick = function () {
    {
        modestOpshin.style.display = "none"
    }

     {
        servicesOpshin.style.display = "block"
    }

     {
        factsOpshin.style.display = "none"
    }

   {
        portfolioOpshin.style.display = "none"
    }

    {
        clientsOpshin.style.display = "none"
    }

    {
        contactOpshin.style.display = "none"
    }

}

FACTS.onclick = function () {
    {
        modestOpshin.style.display = "none"
    }

     {
        servicesOpshin.style.display = "none"
    }

     {
        factsOpshin.style.display = "block"
    }

   {
        portfolioOpshin.style.display = "none"
    }

    {
        clientsOpshin.style.display = "none"
    }

    {
        contactOpshin.style.display = "none"
    }

}

PORTFOLIO.onclick = function () {
    {
        modestOpshin.style.display = "none"
    }

     {
        servicesOpshin.style.display = "none"
    }

     {
        factsOpshin.style.display = "none"
    }

   {
        portfolioOpshin.style.display = "block"
    }

    {
        clientsOpshin.style.display = "none"
    }

    {
        contactOpshin.style.display = "none"
    }

}

CLIENTS.onclick = function () {
    {
        modestOpshin.style.display = "none"
    }

     {
        servicesOpshin.style.display = "none"
    }

     {
        factsOpshin.style.display = "none"
    }

   {
        portfolioOpshin.style.display = "none"
    }

    {
        clientsOpshin.style.display = "block"
    }

    {
        contactOpshin.style.display = "none"
    }

}

CONTACT.onclick = function () {
    {
        modestOpshin.style.display = "none"
    }

     {
        servicesOpshin.style.display = "none"
    }

     {
        factsOpshin.style.display = "none"
    }

   {
        portfolioOpshin.style.display = "none"
    }

    {
        clientsOpshin.style.display = "none"
    }

    {
        contactOpshin.style.display = "block"
    }

}

FOOTER.ondblclick = function () {
    {
        modestOpshin.style.display = "block"
    }

     {
        servicesOpshin.style.display = "block"
    }

     {
        factsOpshin.style.display = "block"
    }

   {
        portfolioOpshin.style.display = "block"
    }

    {
        clientsOpshin.style.display = "block"
    }

    {
        contactOpshin.style.display = "block"
    }

}









// let h6 = document.querySelector(".h6")
// let input = document.querySelectorAll("input")
// let Name = document.querySelector(".Name")



// Name.addEventListener('submit', (e) => {
//     for (let i = 0; i < input.length; i++) {
//         h6.innerHTML = `<p> ${input[0].value} , ${input[1].value} , ${input[2].value} , ${input[3].value} </p>`
//     }
        
//         e.preventDefault()
    
//     })


