/*global jQuery, console */
var Loading;

(function ($) {
    "use strict";
    /**
    * This is the description for my class.
    *
    * @class Loading
    * @constructor
    */
    Loading = function (progress_container, options) {
        /**
        * My property description.  Like other pieces of your comment blocks, 
        * this can span multiple lines.
        * 
        * @property options
        * @type {Object}
        */
        this.options = options;
        
        /**
        * My property description.  Like other pieces of your comment blocks, 
        * this can span multiple lines.
        * 
        * @property progress_container
        * @type {Object}
        */
        this.progress_container = progress_container;
    };
    
    /**
    * My method description.  Like other pieces of your comment blocks, 
    * this can span multiple lines.
    *
    * @method progress
    * @return {Boolean} Returns true on success
    */
    Loading.prototype.progress = function () {
        this.progress_container.find('div').show().stop().animate({
            width: this.options.percent + '%'
        }, this.options.duration);
        
        return true;
    };
    
    /**
    * My method description.  Like other pieces of your comment blocks, 
    * this can span multiple lines.
    *
    * @method ajaxProgress
    * @return {Boolean} Returns true on success
    */
    Loading.prototype.ajaxProgress = function () {
        var options = this.options,
            progress_container = this.progress_container,
            test,
            options_success;
        
        options_success = options.ajax.success;
        
        options.ajax.success = function (result) {
            
            setTimeout(function () {
                options_success(result);
            }, options.after_success);
            
            test = new Loading(progress_container, {
                percent : 100,
                duration : options.after_success
            });
            
            test.progress();
            
        };
        
        $.ajax(options.ajax);
        
        return true;
    };
}(jQuery));

