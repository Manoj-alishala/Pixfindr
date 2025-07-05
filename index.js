const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.getElementById('form');
const userInputEl = document.getElementById('searchInput');
const searchBtnEl = document.getElementById('searchBtn');
const resultEl = document.getElementById('searchResults');
const btnsEl = document.getElementById('btns');
const showMoreButtonEl = document.getElementById('showMore');
const cardsEl = document.getElementById('cards');
const errorEl = document.getElementById('error');
const scroller = document.getElementById("imageScroller");

let inputData = ""
let page = 1;

async function searchImages() {
    inputData = userInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        resultEl.innerHTML = "";
        showMoreButtonEl.classList.add('d-none');
        cardsEl.classList.add('d-none');
    }

    const results = data.results;

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        resultEl.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
        showMoreButtonEl.classList.remove('d-none');
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
    searchImages();
});


const themeToggle = document.getElementById('check-apple');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') body.classList.add('dark');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

const labels = [
    "AI Art",
    "Galaxies",
    "Digital Aesthetics",
    "Abstract Forms",
    "Mystic Forests",
    "Wildlife Shots"
];


const btnList = document.createElement("ul");
btnList.className = "explore-heading text-center list-unstyled d-flex flex-wrap justify-content-center gap-2";

labels.forEach(label => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.className = "btn search-btn d-flex flex-row shadow-lg";
    button.textContent = label;

    button.addEventListener("click", () => {
        userInputEl.value = label;
        page = 1;
        searchImages();
    });

    li.appendChild(button);
    btnList.appendChild(li);
});

btnsEl.appendChild(btnList);



const random = Math.random() * 100;
const pageNum = Math.ceil(random);

async function randomImages() {
    const randomUrl = `https://api.unsplash.com/search/photos?page=${pageNum}&query=random&per_page=10&client_id=${accessKey}`;
    const response = await fetch(randomUrl);
    const data = await response.json();
    const imgLinks = data.results.map(photo => photo.urls.regular);


    scroller.classList.add("scroll-wrapper");

    const track = document.createElement("div");
    track.className = "scroll-track";

    const images = [...imgLinks, ...imgLinks];
    images.forEach((src) => {
        const img = document.createElement("img");
        img.className = "scroll-img";
        img.src = src;
        track.appendChild(img);
    });

    scroller.appendChild(track);
}

randomImages();