$(function () {
  $(document).keyup(function (e) {
     console.log(e.keyCode);
  });
});

// add jquery to html
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

document.addEventListener("keydown", function(e) {
    console.log(e.keyCode);
    console.log(e.key);
});


// https://css-tricks.com/snippets/javascript/javascript-keycodes/
e.which is widely used over e.keyCode

// edge case for caps lock
// only keyup event is fired when the caps lock is being released

// edge case for "shift" key
// since it is used to get to a key's 'shifted character'
// i.e. 1 and ! || 2 and @
