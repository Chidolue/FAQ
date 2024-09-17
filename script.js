let count = 0;
let minus = document.getElementById("minus");
let plus = document.getElementById("plus")
let plus2 = document.getElementById("plus2")
let plus3 = document.getElementById("plus3")
let firstParagraph = document.getElementById("f-paragraph")
let secondParagraph = document.getElementById("s-paragraph")
let thirdParagraph = document.getElementById("t-paragraph")
let fourthParagraph = document.getElementById("fo-paragraph")
let paragraphs = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolio building.", "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.", "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!", ""]

firstParagraph.textContent = paragraphs[0]


minus.addEventListener("click", function() {
    if( (count % 2) === 0) {
        minus.innerHTML = `
        <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus">
        `
        count++
        firstParagraph.textContent = "";
    }

    else {
        minus.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-minus.svg" alt="minus">
        `
        count++;
        firstParagraph.textContent = paragraphs[0]
    }
})

plus.addEventListener("click", function() {
    if( (count % 2) === 0 ){
        plus.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-minus.svg" alt="minus">
        `
        secondParagraph.textContent = paragraphs[1]
        firstParagraph.textContent = "";
        count++
    }
    else {
        plus.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus">
        `
        secondParagraph.textContent = ""
        count++
    }
})

plus2.addEventListener("click", function() {
    if( (count % 2) === 0 ){
        plus2.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-minus.svg" alt="minus">
        `
        thirdParagraph.textContent = paragraphs[2]
        firstParagraph.textContent = "";
        secondParagraph.textContent = "";
        count++
    }
    else {
        plus2.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus">
        `
        thirdParagraph.textContent = ""
        firstParagraph.textContent = "";
        secondParagraph.textContent = "";
        count++
    }
})

plus3.addEventListener("click", function() {
    if( (count % 2) === 0 ){
        plus3.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-minus.svg" alt="minus">
        `
        fourthParagraph.textContent = paragraphs[2]
        firstParagraph.textContent = "";
        secondParagraph.textContent = "";
        count++
    }
    else {
        plus3.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus">
        `
        thirdParagraph.textContent = ""
        firstParagraph.textContent = "";
        secondParagraph.textContent = "";
        fourthParagraph.textContent = "";
        count++
    }
})

