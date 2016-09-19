(function($) {
        $.alert = function(element, timeout, title, message, close_btn) {
            var self = this;
            if($(element).hasClass("hide")) {
                $(element).removeClass("hide");
                $(element).addClass("show");
            }
            if(title != null) {
                $(element+" .title").text(title);
            }

            if(message != null) {
                $(element+" .message").text(message);
            }

            if(close_btn == true) {
                $(element+" button").removeClass("hide").addClass("show");
            }

            if(timeout != null) {
                $(element).delay(timeout).fadeOut('slow').removeClass("show");
            }
            var methods = {
                success: function() {
                    $(element).addClass("alert-success");
                    return this;
                },
                warning: function() {
                    $(element).addClass("alert-warning");
                    return this;
                },
                danger: function() {
                    $(element).addClass("alert-danger");
                    return this;
                },
                info: function() {
                    $(element).addClass("alert-info");
                    return this;
                }
            };
            return methods;
        }
    }(jQuery));
