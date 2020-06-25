const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const buttons = document.querySelector("#buttons").children;



for (let card of cards){

    card.addEventListener("click", function (){
        const fotoId = card.getAttribute("id");
        const title = card.querySelector(".content").innerHTML;
        const text = card.querySelector(".info").innerHTML;
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("img").src=`https://images.unsplash.com/photo-${fotoId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80`;
        modalOverlay.querySelector(".title").innerHTML = title;
        modalOverlay.querySelector(".info").innerHTML = text; 
    })
}

document.querySelector(".close-modal").addEventListener("click", function (){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("img").src="";
})


for (let button of buttons){

    button.addEventListener("click", function(){

        for (let button of buttons){
            button.classList.remove("active");
        }
         this.classList.add("active")
         const target = this.getAttribute("data-target");

         for (let card of cards){
             card.style.opacity = "0.3";
             card.style.transform = "scale(0.8)";

             if (card.getAttribute("data-id") == target){
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
             }

             if (target == "all"){
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
             }
         }
    })
}