/*global jQuery, console*/
/*jslint sloppy: true*/

jQuery(function ($) {

    $('#ajax-loading').loading({
        progress : 90,
        duration : 2000,
        duration_after_success : 1500,
        ajax: {
            url : 'test.html',
            success: function (result) {
                console.log(result);
            }
        }
    });
    
    $('#fake-loading').loading({
        progress: 70,
        duration: 3000
    });
    
    $('#simple-loading').loading();
    
    $('#simplest-loading').loading();
    
});