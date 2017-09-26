

var currentSubmit = document.getElementById("n-button-submit");
var form = document.getElementById("add-site-form");
var results = document.getElementById("bookmarkResults");



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
       localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
   }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    fetchBookmarks()

    e.preventDefault();

}



function deleteBookmark (url) {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    for (var i in bookmarks){
        var bookmark_url = bookmarks[i].url;

        if (url === bookmark_url){
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    fetchBookmarks()
}


function  fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    results.innerHTML = "";

    //  for (var i = 0; i < bookmarks.length; i++) {

    for (var i in bookmarks) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        results.innerHTML += '<div class="well">' +
            '<h3>' + name +
            ' <a class="btn btn-default" target="_blank" href="' + url + '">Visit</a> ' +
            ' <a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a> ' +
            '</h3>' +
            '</div>';
    }
}




form.addEventListener("submit", saveBookmark);
