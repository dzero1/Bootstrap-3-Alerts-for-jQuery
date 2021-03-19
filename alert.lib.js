(function($) {
    $.alert = function(title, message = null, timeout = 3000, close_btn = true) {
        var ele = $(`<div id="alert_lib" style="position: fixed; top: 60px; right: 10px; z-index: 10000000; margin-left: auto; margin-right: auto;" class="alert alert-dismissable">
                        <strong class="title"></strong>
                        <p class="message"></p>
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    </div>`);

        if(title != null && title != '') {
            $(".title", ele).text(title);
        } else if(title == '' || title == null) {
            $(".title", ele).hide();
        }
        if(message != null && message != '') {
            $(".message", ele).text(message);
        } else if(message == '' || message == null) {
            $(".message", ele).hide();
        }
        if(close_btn == false) {
            $("button.close", ele).hide();
        }
        if(timeout != null) {
            ele.delay(timeout).fadeOut('slow', function() {
                ele.remove();
            });
        }
        $(document.body).append(ele);
        var methods = {
            success: function() {
                ele.addClass("alert-success").fadeIn();
                return this;
            },
            warning: function() {
                ele.addClass("alert-warning").fadeIn();
                ele.show();
                return this;
            },
            danger: function() {
                 ele.addClass("alert-danger").fadeIn();
                ele.show();
                return this;
            },
            info: function() {
                ele.addClass("alert-info").fadeIn();
                ele.show();
                return this;
            }
        };
        return methods;
    }
}(jQuery));
