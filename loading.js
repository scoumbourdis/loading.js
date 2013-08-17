var Loading;

(function () {
    "use strict";
    Loading = function (progress_container) {
        this.progress_container = progress_container;
    };
    
    Loading.prototype.progress = function (progress_percentage, duration) {
        var progressBarWidth = progress_percentage * this.progress_container.width() / 100;
        
        this.progress_container.find('div').show().stop().animate({ width: progressBarWidth }, duration);
        
    };
}());

