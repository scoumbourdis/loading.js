var Loading;

(function () {
    "use strict";
    Loading = function (progress_container, options) {
        this.options = options;
        this.progress_container = progress_container;
    };
    
    Loading.prototype.progress = function () {
        this.progress_container.find('div').show().stop().animate({ width: this.options.percent + '%' }, this.options.duration);
        
    };
    
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
    };
}());

