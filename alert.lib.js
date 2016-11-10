(function($) {
        $.alert = function(element, timeout, title, message, close_btn) {
            var last_number = parseInt( $('div[id^="alert"]:last').prop("id").match(/\d+/g), 10) || 0;
            var add = last_number+1;
            var ele = $(element).clone().prop("id", "alert-"+add).insertAfter("div.alert:last")
            ele.removeClass("hide");
            if(title != null) {
                $(".title", ele).text(title);
            }
            if(message != null) {
                $(".message", ele).text(message);
            }
            if(close_btn == true) {
                $("button", ele).removeClass("hide").addClass("show");
            }
            if(timeout != null) {
                $.when(ele.delay(timeout).fadeOut('slow')).done(function() {
                    ele.remove();
                    $(element).addClass("hide");
                });
            }
            var methods = {
                success: function() {
                    ele.addClass("alert-success");
                    return this;
                },
                warning: function() {
                    ele.addClass("alert-warning");
                    return this;
                },
                danger: function() {
                     ele.addClass("alert-danger");
                    return this;
                },
                info: function() {
                    ele.addClass("alert-info");
                    return this;
                }
            };
            return methods;
        }
}(jQuery));
