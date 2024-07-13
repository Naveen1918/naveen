// Tab Switching Script
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Side Menu Script
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// Google Sheets Submission Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbz6Bl8vsdYTRxW462SKoA4PoffuF6DOLn0Nh6q6bMwVFpvU00evF4ME6pwdBzf1k45E/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 10000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
