let paragraph1 = document.getElementById("paragraph1");
let paragraph2 = document.getElementById("paragraph2");
let paragraph3 = document.getElementById("paragraph3");
let paragraph4 = document.getElementById("paragraph4");

let plusBtn = document.getElementById("plus-btn")
let count = 0;
let faqsText = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects on HTML, CSS and Javascript. It's suitable for all levels and ideals for portfolio building.", "second", "third", "fourth"]

paragraph1.textContent = faqsText[0];

function run() {
    paragraph1.textContent = "";
}

plusBtn.addEventListener("click", function() {
    if((count%2)===0){
        run()
    }
    else {
        paragraph1.textContent = faqsText[0]
        paragraph2.textContent = faqsText[1]
    }
    count++
})

function minus() {

}