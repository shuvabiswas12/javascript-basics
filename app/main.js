var newItemCounter = 1;

var ourList = document.getElementById("our-list");
// var ourList = document.querySelector("#our-list");

var ourButton = document.getElementById("our-button");

var ourHeadline = document.getElementById("our-headline");

var listItems = document.getElementById("our-list").getElementsByTagName("li");
// this query selector used in modern browser
// var listItems = document.querySelectorAll("#our-list li");


// this is for all of the items including the new items
ourList.addEventListener("click", activateItem);

function activateItem(e) {

    if (e.target.nodeName == "LI") {
        ourHeadline.innerHTML = e.target.innerHTML;

        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }

        e.target.classList.add("active");
    }
}


ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Something new " + newItemCounter++ + "</li>";
}















// This is for a definite number of items but not for new items
// for (i = 0; i < listItems.length; i++) {
//
//     listItems[i].addEventListener("click", activateItem);
//
// }
//
// this function works on only those elements which are remaining from the begin but not the new element.
// function activateItem(e) {
//     ourHeadline.innerHTML = this.innerHTML;
//     for (i = 0; i < listItems.length; i++) {
//         listItems[i].classList.remove("active");
//     }
//     this.classList.add("active");
// }
