'use strict';
console.log("działa")
document.addEventListener('DOMContentLoaded', function() {
    var showMenuDOM = document.querySelector('.for-dropdown');
    var menuDOM = document.querySelector('.dropdown');

    showMenuDOM.addEventListener('mouseover', function() {
        menuDOM.style.display = 'block'
    });

    showMenuDOM.addEventListener('mouseout', function() {
        menuDOM.style.display = 'none'
    });

    // tutaj będziemy umieszczać kod ze wszystkich zadań
});


document.addEventListener('DOMContentLoaded', function() {

});
