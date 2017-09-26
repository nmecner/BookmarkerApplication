//Listen for form submit

var currentSubmit = document.getElementById("n-button-submit");
var form = document.getElementById('add-site-form');

function saveBookmark(){
    console.log('It Works');
};

//Listen for the events
//currentSubmit.addEventListener("click", function() {alert("clicked!")});
form.addEventListener("submit", saveBookmark );
