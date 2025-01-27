// let likeBtns = document.getElementsByClassName("like-btn");

// for(let btn of likeBtns){
//     btn.addEventListener("click", ()=>{
//         btn.classList.remove("fa-regular", "fa-heart");
//         btn.classList.add("fa-solid", "fa-heart");
//     });
// }

// Select all elements with the class "like-btn"
let likeBtns = document.getElementsByClassName("like-btn");

// Iterate through each button
for (let btn of likeBtns) {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        // Remove the regular heart icon classes
        btn.classList.remove("fa-regular", "fa-heart");
        // Add the solid heart icon classes
        btn.classList.add("fa-solid", "fa-heart");

        console.log(btn.classList);
    });
}
