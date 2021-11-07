var detailsForm = document.querySelector("#details_form");

detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();


    // 1. Extract the value from each form field.
    var destName = event.target.elements["name"].value;
    var destLocation = event.target.elements["location"].value;
    var destPhoto = event.target.elements["photo"].value;
    var destDesc = event.target.elements["description"].value;


    // 2. clear out the form fields.
    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";

    }


    // Create Card
    var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);



    // 3. run a function that creates the new card.
    var wishListContainer = document.querySelector("#destination_container");

    if (wishListContainer.children.length === 0) {
        document.querySelector("#title").innerHTML = "My Wish List";
    }


    // add the card
    document.querySelector("#destination_container").appendChild(destCard);
}


// 5. add the card.

function createDestinationCard(name, location, photourl, description) {

    var card = document.createElement("div");
    card.className = "card";

    var img = document.createElement('img');
    img.setAttribute('alt', name);

    var constPhotourl = "images/signpost.jpg";

    if (photourl.length === 0) {
        img.setAttribute('src', constPhotourl);

    }
    else {
        img.setAttribute('src', photourl);
    }

    card.appendChild(img);


    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length !== 0) {
        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);

    }

    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;


}


function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();

}