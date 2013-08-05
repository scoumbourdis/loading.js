/*global jQuery, console*/
(function ($) {
    "use strict";
    $.fn.loading = function (options) {
        var progressBarWidth,
            settings,
            options_success,
            after_success,
            my_object = this;
        
        settings = $.extend({
            percent : 90,
            duration : 2000,
            after_success : 500
        }, options);
        
        if (settings.percent < 0 || settings.percent > 100) {
            $.error("The percentage has to be a number between 0 and 100");
        }
        
        if (typeof options !== 'undefined' && typeof options.ajax !== 'undefined') {
            options_success = options.ajax.success;
            
            options.ajax.success = function (result) {
                
                setTimeout(function () {
                    options_success(result);
                }, settings.after_success);
                
                my_object.loading({
                    percent : 100,
                    duration : settings.after_success
                });
            };
            
            $.ajax(options.ajax);
        }
        
        progressBarWidth = settings.percent * this.width() / 100;
        
        this.each(function () {
            $(this).find('div').show().stop()
                .animate({ width: progressBarWidth }, settings.duration);
        });
        
        return this;
    };
}(jQuery));