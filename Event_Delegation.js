// /*
// 1. Get a reference to all images in the gallery
// 2. Add a click event listener to each image (loop)
// 3. When the image is clicked, find out its alt attribute and alert it
//  */
//
// var images = document.querySelectorAll('#gallery img');
//
// images.forEach(function(image) {
//     image.addEventListener('click', function() {
//         var alt = image.getAttribute('alt');
//         alert(alt);
//     })
// });
//

/*
The code below uses Event Delegation to add one event listener to rule them all
We have to do a tiny bit more work to check the actual target of the click events
In exchange we get two benefits:

  1. We have only one event listener instead of one per element, so the page is lighter in terms of RAM usage
  2. If we add new elements dynamically, they will still behave correctly because it's their parent that has the click handler
 */
var gallery = document.querySelector('#gallery');

gallery.addEventListener('click', function(eventObj) {
    if (eventObj.target.matches('img')) {
        var image = eventObj.target;
        var alt = image.getAttribute('alt');
        alert(alt);
    }
});

setTimeout(function() {

    var imageData = {
        url: "http://baconmockup.com/105/105",
        description: "mmmmm bacoooonnn"
    };

    var gallery = document.querySelector('#gallery');

    var newListItem = document.createElement('li');

    var newImage = document.createElement('img');
    newImage.setAttribute('src', imageData.url);
    newImage.setAttribute('alt', imageData.description);

    newListItem.appendChild(newImage);

    gallery.appendChild(newListItem);

}, 5000);