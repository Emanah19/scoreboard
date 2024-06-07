// Home  

let homeCount = 0;
let changeCount = document.getElementById("home--btn");

function addOne() {
    homeCount += 1;
    changeCount.textContent = homeCount;
}
function addTwo() {
    homeCount += 2;
    changeCount.textContent = homeCount;
}
function addThree() {
    homeCount += 3;
    changeCount.textContent = homeCount;
}



// Guest 
let guestCount = 0;
let guestCountChange = document.getElementById("guest--btn");

function guestAddOne() {
    guestCount += 1;
    guestCountChange.textContent = guestCount;
}
function guestAddTwo() {
    guestCount += 2;
    guestCountChange.textContent = guestCount;
}
function guestAddThree() {
    guestCount += 3;
    guestCountChange.textContent = guestCount;
}


// save scores 

let saveHome , saveGuest;

let domHome = document.getElementById("home--count")
let domGuest = document.getElementById("guest--count")

function saveClick() {
    saveHome  = `${homeCount} -- `
    domHome.textContent += saveHome;

    saveGuest  = `${guestCount} -- `
    domGuest.textContent += saveGuest;

    changeCount.textContent = 0;
    homeCount = 0;
    guestCountChange.textContent = 0;
    guestCount = 0;

}