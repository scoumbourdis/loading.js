/*global jQuery, console*/
(function ($) {
    "use strict";
    $.fn.loading = function (options) {
        var progressBarWidth,
            settings;
        
        settings = $.extend({
            percent : 90,
            duration : 2000
        }, options);
        
        if (settings.percent < 0 || settings.percent > 100) {
            $.error("The percentage has to be a number between 0 and 100");
        }
        
        if (typeof options !== 'undefined' && typeof options.ajax !== 'undefined') {
            var options_success = options.ajax.success,
                my_object = this;
            
            options.ajax.success = function (result) {
                
                setTimeout(function () {
                    options_success(result);
                }, 500);
                
                my_object.loading({
                    percent : 100,
                    duration : 500
                });
            };
            
            $.ajax(options.ajax);
        }
        
        progressBarWidth = settings.percent * this.width() / 100;
        
        this.find('div').show().stop()
            .animate({ width: progressBarWidth }, settings.duration);
        
        return this;
    };
}(jQuery));