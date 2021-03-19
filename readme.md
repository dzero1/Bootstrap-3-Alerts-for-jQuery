This is an forked repository from "https://github.com/ubergeekzone/Bootstrap-3-Alerts-for-jQuery" and updated to use without any HTML code in you document body and update the main method to use this quickly and cleanly.

The initial code credit goes to the original developer Amy Bridges (https://github.com/ubergeekzone).

# How to use Bootstrap Alerts for jQuery

```javascript
$(document).ready(function() {
  $.alert("Have you heard about the new game?", '', 3000, false).info();
  $.alert("Did you mean to delete the game?", 3000, false).warning();
  $.alert("You won the game, Congrats!", 3000, true).success();
  $.alert("Awe, Snap! You lost the game.", 3000, false).danger();
});
```

## Parameters
- {String} title - Message Title. Also can use as simple message
- {String} message - Message body if this is a complex message
- {number} timeout - Should fade out by this much milliseconds ?
- {bool} close_btn - Show or hide close button

## Methods 
.warning(), .info(), .danger(), .success()

##  Version Support
* Bootstrap 3
* Bootstrap 4
