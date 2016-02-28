require.config({
    baseUrl: 'js'
});
 
require(['selector', 'event'], function($, E) {
    console.log(E.add(5,3))
});