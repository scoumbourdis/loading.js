/*global $*/
/*jslint sloppy: true*/

$('#ajax-loading').loading({
    percent : 90,
    duration : 2000,
    after_success : 1500,
    ajax: {
        url : 'test.html',
        success: function (result) {
            console.log(result);
        }
    }
});

$('#fake-loading').loading({
    percent: 70,
    duration: 3000
});

$('#simple-loading').loading();