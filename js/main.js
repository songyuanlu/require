require.config({
	paths: {
		"jquery": "../js/lib/jquery/1.12.1/jquery",
		"wx": "../js/lib/weixin/1.0.0/jweixin"
	}
});


require(['jquery', 'wx', 'header'], function($, wx, header){
	$('#abc').html('sfs')

	
	alert(header.add(1,1));
	var fnTest = new header.Fntest('song','web',27);
	fnTest.init()
})