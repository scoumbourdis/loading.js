/*global jQuery, console, Loading, setTimeout */
(function ($) {
    "use strict";
    
    /**
    * This is the description for my class.
    *
    * @class Loading
    * @constructor
    */
    var Loading = function (progress_container, options) {
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
        
        /**
        * My property description.  Like other pieces of your comment blocks, 
        * this can span multiple lines.
        * 
        * @property progress_container
        * @type {Object}
        */
        this.init = function () {
            progress_container.addClass(Loading.CSS_CLASS_MAIN_CONTAINER);
            
            if (progress_container.children().length === 0) {
                progress_container.html($('<div/>').addClass(Loading.CSS_CLASS_PROGRESS_BAR));
            }
        };
    };
    
    /** Loading class Constants */
    Loading.CSS_CLASS_MAIN_CONTAINER = 'loading-container';
    Loading.CSS_CLASS_PROGRESS_BAR = 'loading-progressbar';
    
    /**
    * My method description.  Like other pieces of your comment blocks, 
    * this can span multiple lines.
    *
    * @method progress
    * @return {Boolean} Returns true on success
    */
    Loading.prototype.progress = function () {
        this.progress_container.find('div').show().stop().animate({
            width: this.options.progress + '%'
        }, this.options.duration);
        
        return true;
    };
    
    Loading.prototype.stop_progress = function () {
        this.progress_container.find('div').show().stop();
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
            }, options.duration_after_success);
            
            test = new Loading(progress_container, {
                progress : 100,
                duration : options.duration_after_success
            });
            
            test.progress();
            
        };
        
        $.ajax(options.ajax);
        
        return true;
    };
    
    $.fn.loading = function (options) {
        var settings,
            options_success,
            duration_after_success,
            loadingObject,
            fn_stop_progress,
            my_object = this;
        
        fn_stop_progress = function () {
            loadingObject.stop_progress();
        };
        
        if (typeof options === 'string') {
            this.fn_stop_progress();
            return this;
        }
        
        settings = $.extend({
            progress : 100,
            duration : 2000,
            step_duration: 100,
            progress_callback : function () {}, //returns true, false or an integer
            progress_every : 1000,
            duration_after_success : 500,
            duration_after_error : 0,
            stop_progress_on_error : false,
            stop_progress_on_success : false,
            after_loading : function () {},
            stop_progress : false
        }, options);
        
        loadingObject = new Loading($(this), settings);
        
        loadingObject.init();
        
        if (settings.progress < 0 || settings.progress > 100) {
            $.error("The progress has to be a number between 0 and 100");
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