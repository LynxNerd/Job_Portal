let form = document.querySelector("#jobForm");
let jobContainer = document.querySelector("#jobCardsContainer");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let title = document.querySelector("#jobTitle").value;
    let company = document.querySelector("#companyName").value;
    let location = document.querySelector("#jobLocation").value;
    let description = document.querySelector("#jobDescription").value;

    if(title == "" || company == "" || location == "" || description == "") {
        alert("Please fill all fields before submitting");
        return;
    }

    let card = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.innerText = title;

    let p1 = document.createElement("p");
    p1.innerText = "Company: " + company;

    let p2 = document.createElement("p");
    p2.innerText = "Location: " + location;

    let p3 = document.createElement("p");
    p3.innerText = description;

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);

    jobContainer.appendChild(card);

    deleteBtn.addEventListener("click", function() {
        jobContainer.removeChild(card);
    });

    editBtn.addEventListener("click", function() {

        document.querySelector("#jobTitle").value = title;
        document.querySelector("#companyName").value = company;
        document.querySelector("#jobLocation").value = location;
        document.querySelector("#jobDescription").value = description;

        jobContainer.removeChild(card);
    });

    form.reset();
});


let searchForm = document.querySelector("#searchForm");
let searchResults = document.querySelector("#searchResults");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let keyword = searchForm.querySelector("input[type='text']").value.toLowerCase();
    let locationInput = searchForm.querySelectorAll("input[type='text']")[1].value.toLowerCase();

    searchResults.innerHTML = ""; // Clear old results

    let allJobs = document.querySelectorAll("article");

    let found = false;

    allJobs.forEach(function (job) {
        let jobText = job.innerText.toLowerCase();

        if (jobText.includes(keyword) && jobText.includes(locationInput)) {

            let clone = job.cloneNode(true);
            searchResults.appendChild(clone);
            found = true;
        }
    });

    if (!found) {
        searchResults.innerHTML = "<p>No jobs found.</p>";
    }
});