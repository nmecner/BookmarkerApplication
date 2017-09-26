

var form = document.getElementById("add-site-form");
var results = document.getElementById("bookmarkResults");

form.addEventListener("submit", saveBookmark);



function saveBookmark(e){
    var siteName = document.getElementById("siteName").value;
    var siteUrl = document.getElementById("siteUrl").value;

    if(!validateForm(siteName, siteUrl)) {
        return false;
    }

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
    form.reset();

    fetchBookmarks();

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




function validateForm(siteName, siteUrl){
    if(!siteName || !siteUrl){
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)){
        alert("please use a valid URL");
        return false;
    }

    return true;

}


