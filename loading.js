/*global jQuery*/
(function ($) {
    "use strict";
    $.fn.loading = function () {
        var percent = 90,
            progress_time = 2000,
            progressBarWidth;
        
        progressBarWidth = percent * this.width() / 100;
        
        this.find('div').show().stop().animate({ width: progressBarWidth }, progress_time);
        return this;
    };
}(jQuery));