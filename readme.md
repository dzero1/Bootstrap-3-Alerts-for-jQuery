# How to use Bootstrap 3 Alerts for jQuery

Bootstap 4 is supported at this time.

It's a very simple lib plugin using the same naming conventions of the bootstrap 3 alert css classes such as: info, warning, success, danger

Use it like so
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
id/class, seconds for timeout hide, alert title, alert message, show/hide close button = true/false  

## Methods 
.warning(), .info(), .danger(), .success()

This is a re-write of the original plugin located at https://github.com/ubergeekzone/Bootstrap3Alerts, Please do not use the old repo.
