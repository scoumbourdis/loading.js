/*global $*/
/*jslint sloppy: true*/

$('.loading-container').loading({
    percent : 90,
    duration : 2000,
    after_success : 2000,
    ajax: {
        url : 'test.html',
        success: function (result) {
            console.log(result);
        }
    }
});