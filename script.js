let count = 0;
let faqs = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolio building.", "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.", "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!", "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated 'help' channel!"];

let minusIcon = document.getElementById("minus");
let paragraph1 = document.getElementById("para1");

let plusIcon = document.getElementById("plus")
let paragraph2 = document.getElementById("para2")

let plus2 = document.getElementById("plus2")
let paragraph3 = document.getElementById("para3")

let plus3 = document.getElementById("plus3")
let paragraph4 = document.getElementById("para4")

paragraph1.textContent = faqs[0]


minusIcon.addEventListener("click", function() {
    if( (count % 2) === 0 ) {
        minusIcon.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus">
        `
        paragraph1.textContent = []
    }
    else {
        minusIcon.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-minus.svg" alt="minus">
        `
        paragraph1.textContent = faqs[0]
    }
    count++
})

plusIcon.addEventListener("click", function() {
    if( (count % 2) === 0) {
        paragraph2.textContent = faqs[1]
        plusIcon.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-minus.svg" alt="minus">
        `
    }
    else {
        plusIcon.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus">
        `
        paragraph2.textContent = []
    }

    count++
})

plus2.addEventListener("click", function() {
    if( (count % 2) === 0) {
        plus2.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-minus.svg" alt="minus">
        `
        paragraph3.textContent = faqs[2]
    }
    else {
        plus2.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus">
        `
        paragraph3.textContent = []
    }
    count++
})

plus3.addEventListener("click", function() {
    if( (count % 2) === 0) {
        plus3.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-minus.svg" alt="minus">
        `
        paragraph4.textContent = faqs[3]
    }
    else {
        plus3.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus">
        `
        paragraph4.textContent = []
    }
    count++
})
