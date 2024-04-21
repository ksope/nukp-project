const navLinks = document.getElementById("nav-links");

//show menu function
const showMenu = () => {
    navLinks.style.right = "0";
};

const hideMenu = () => {
    navLinks.style.right = "-200px";
};

//read more button
const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");

//show more pararaphs on clicking read more link
readMoreBtn.addEventListener("click", () => {
    readMoreContent.classList.toggle("show-content");
    if (readMoreContent.classList.contains("show-content")) {
        readMoreBtn.textContent = "Show less";
    } else {
        readMoreBtn.textContent = "Show more";
    }
});

