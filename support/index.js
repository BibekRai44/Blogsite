const readBtn = document.querySelector(".js-read-btn");
const articles = document.querySelector(".articles");

readBtn.addEventListener("click", (e) => {
    articles.scrollIntoView();
});
