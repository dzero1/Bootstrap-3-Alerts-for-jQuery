Need bootstrap alerts for your project? Not an issue, I have you covered. Below you will find documetion on how to use the jQuery Plugin.

# How to use Bootstrap 3 and Bootstrap 4 Alerts for jQuery

```css
#alert .title {
    font-weight: bold;
}
#alert .title:after {
    content: ":"
}
.alert {
position: relative;
top: 0;
left: 0;
right:0;
z-index:10000000;
margin-left: auto;
margin-right: auto;
}
```

```html
<div id="alert" class="hide alert alert-dismissable">
    <span class="title"></span>
    <span class="message"></span>
    <button type="button" class="close hide" data-dismiss="alert" aria-hidden="true">&times;</button>
</div>
```

```javascript
$(document).ready(function() {
  $.alert(".alert", 3000, "Have you heard about the new game?", false).info();
  $.alert(".alert", 3000, "Did you mean to delete the game?", false).warning();
  $.alert(".alert", 3000, "You won the game, Congrats!", true).success();
  $.alert(".alert", 3000, "Awe, Snap! You lost the game.", false).danger();
});
```

## Parameters
selector (id/class), timeout (in seconds), title, message, close button (true/false)

## Methods 
.warning(), .info(), .danger(), .success()

This is a re-write of the original plugin located at https://github.com/ubergeekzone/Bootstrap3Alerts, Please do not use the old repo.
