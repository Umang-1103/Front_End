
// Toggle Theme Start
function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

function loadTheme() {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
}
// Toggle Theme End

// URL Validation Start
function validation() {

    let title = document.getElementById("title").value;
    let title_error = document.getElementById("title-error");

    let url = document.getElementById("url").value;
    let url_error = document.getElementById("url-error");

    if (title == "" || title == null) {
        title_error.innerHTML = "**Please Enter a Title";
        title_error.style.color = "red";
        return false;
    }
    else {
        title_error.innerHTML = "";
    }

    if (url == "" || url == null) {
        url_error.innerHTML = "**Please Enter a URL";
        url_error.style.color = "red";
        return false;
    }
    else {
        url_error.innerHTML = "";
    }

    return true;
}
// URL Validation End

// Add & Remove Link Start
let title = document.getElementById("title");
let url = document.getElementById("url");
let output = document.getElementById("output");

function savedLinks(event) {

    event.preventDefault();

    if (!validation()) {
        return;
    }

    let saved_title = title.value;
    let saved_url = url.value;

    let link = {
        id: Date.now(),
        title: saved_title,
        url: saved_url
    }

    let links = JSON.parse(localStorage.getItem("links")) || [];
    links.push(link);
    localStorage.setItem("links", JSON.stringify(links));
    showlink();
}

function showlink() {

    let links = JSON.parse(localStorage.getItem("links")) || [];
    output.innerHTML = "";
    links.forEach(link => {

        let row = document.createElement("div");
        row.classList.add("link-card");
        let btn = document.createElement("button");
        btn.classList.add("link-btn");
        btn.innerHTML = link.title;
        btn.addEventListener("click", function () {
            window.open(link.url, "_blank");
        });

        let remove = document.createElement("button");
        remove.classList.add("remove-btn");
        remove.innerHTML = "Delete";
        remove.addEventListener("click", function () {
            links = links.filter(item => item.url !== link.url);
            localStorage.setItem("links", JSON.stringify(links));
            showlink();
        });

        row.appendChild(btn);
        row.appendChild(remove);

        output.appendChild(row);
    });

    title.value = "";
    url.value = "";
}

window.onload = function () {
    showlink();
    loadTheme();
}

// Add & Remove Link End

