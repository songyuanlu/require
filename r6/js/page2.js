require.config({
    baseUrl: 'js',
    paths: {
        'jquery': '../jquery'
    }
});
 
require(['jquery', 'event', 'selector'], function($, E, S) {
	alert(2);
    alert($);
});