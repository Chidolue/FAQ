let count = 0;
let minus = document.getElementById("minus");
let firstParagraph = document.getElementById("f-paragraph")
let paragraphs = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolio building."]

firstParagraph.textContent = paragraphs[0]

function empty() {
    firstParagraph.textContent = "";
}

minus.addEventListener("click", function() {
    if( (count % 2) === 0) {
        minus.innerHTML = `
        <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="plus">
        `
        count++
        empty()
    }

    else {
        minus.innerHTML = `
            <img src="faq-accordion-main/assets/images/icon-minus.svg" alt="minus">
        `
        count++;
        firstParagraph.textContent = paragraphs[0]
    }
})

