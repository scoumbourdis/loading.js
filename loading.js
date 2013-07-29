/*global jQuery*/
(function ($) {
    "use strict";
    $.fn.loading = function (options) {
        var progressBarWidth,
            settings;
        
        settings = $.extend({
            percent: 90,
            progress_time: 2000
        }, options);
        
        if (typeof options !== 'undefined' && typeof options.ajax !== 'undefined') {
            $.ajax(options.ajax);
        }
        
        progressBarWidth = settings.percent * this.width() / 100;
        
        this.find('div').show().stop()
            .animate({ width: progressBarWidth }, settings.progress_time);
        
        return this;
    };
}(jQuery));