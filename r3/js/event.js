define(['cache'], function(miuns) {
    
    function add(a,b){
        return a+b+miuns.miuns(a,b);
    }
    return {
        add : add
    };
});