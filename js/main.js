

var currentSubmit = document.getElementById("n-button-submit");
var form = document.getElementById("add-site-form");



function saveBookmark(e){
    var siteName = document.getElementById("siteName").value;
    var siteUrl = document.getElementById("siteUrl").value;
    var bookmark = {
        name: siteName,
        url: siteUrl
    };


    // check if bookmarks is null
   if (localStorage.getItem("bookmarks") === null){

     var bookmarks = [];
     bookmarks.push(bookmark);
     localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
   } else {
       var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
       bookmarks.push(bookmark);
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }
    

    e.preventDefault();

}


form.addEventListener("submit", saveBookmark);
