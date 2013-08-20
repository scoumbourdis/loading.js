/*global jQuery, console, Loading */
(function ($) {
    "use strict";
    $.fn.loading = function (options) {
        var settings,
            options_success,
            after_success,
            loadingObject,
            my_object = this;
        
        settings = $.extend({
            percent : 100,
            duration : 2000,
            after_success : 500,
            after_loading : function () {}
        }, options);
        
        loadingObject = new Loading($(this), settings);
        
        if (settings.percent < 0 || settings.percent > 100) {
            $.error("The percentage has to be a number between 0 and 100");
        }
        
        if (typeof options !== 'undefined' && typeof options.ajax !== 'undefined') {
            loadingObject.ajaxProgress();
        }
        
        this.each(function () {
            loadingObject.progress();
        });
        
        return this;
    };
}(jQuery));