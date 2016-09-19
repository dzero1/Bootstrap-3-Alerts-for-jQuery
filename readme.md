# How to use Bootstrap 3 Alerts for jQuery

It's a very simple lib plugin using the same naming convetions of the bootstrap 3 alert css classes such as: info, warning, success, danger

Use it like so

```javascript
$(document).ready(function() {
  $.alert("#alert", 3000, "warning", "You have wont the game.", false).warning();
});
```

## Parameters 
id/class, seconds for timeout hide, alert title, alert message, show/hide close button = true/false  

## Methods 
.warning(), .info(), .danger(), .success()

This is a re-write of the original plugin located at https://github.com/ubergeekzone/Bootstrap3Alerts, Please do not use the old repo.
