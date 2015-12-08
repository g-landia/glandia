//progressiveTargetNumber - ptn

function ptn(id, a, b, c)
{
	var x = i = 0;
    var y = 1000/70;
    var j = parseInt(b/y);
    y = b/j;
    var k = a/j;

	var int1 = setInterval(function()
	{
		if(i<j+1)
		{
			x =  k * i;
			document.getElementById(id).innerHTML = (x.toFixed(c));
			i++;
		}else
		{
			window.clearInterval(int1);
		}
	},y);
}

//ptn(identifier, endValue, duration[in ms], nbDecimales);
ptn("target", 100008, 1331, 0);


$('#toggle-login').click(function(){
  $('#login').toggle();
});