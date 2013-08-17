var Loading;

(function () {
    "use strict";
    Loading = function (progress_container) {
        this.progress_container = progress_container;
    };
    
    Loading.prototype.progress = function (progress_percentage, duration) {
        this.progress_container.find('div').show().stop().animate({ width: progress_percentage + '%' }, duration);
        
    };
}());

