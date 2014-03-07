
var st1 = 0;
var st2 = 0;
var st3 = 0;

$(document).ready(function () {

	setInterval(function(){
		document.getElementById('gear1').style.webkitTransform = 'rotate(' + -st1 + 'deg)';
	    document.getElementById('gear1').style.MozTransform = 'rotate(' + -st1 + 'deg)';
	    document.getElementById('gear1').style.msTransform = 'rotate(' + -st1 + 'deg)';
	    document.getElementById('gear1').style.oTransform = 'rotate(' + -st1 + 'deg)';
	    document.getElementById('gear1').style.transform = 'rotate(' + -st1 + 'deg)';

	    document.getElementById('gear2').style.webkitTransform = 'rotate(' + st2 + 'deg)';
	    document.getElementById('gear2').style.MozTransform = 'rotate(' + st2 + 'deg)';
	    document.getElementById('gear2').style.msTransform = 'rotate(' + st2 + 'deg)';
	    document.getElementById('gear2').style.oTransform = 'rotate(' + st2 + 'deg)';
	    document.getElementById('gear2').style.transform = 'rotate(' + st2 + 'deg)';
	    
	    document.getElementById('gear3').style.webkitTransform = 'rotate(' + st3 + 'deg)';
	    document.getElementById('gear3').style.MozTransform = 'rotate(' + st3 + 'deg)';
	    document.getElementById('gear3').style.msTransform = 'rotate(' + st3 + 'deg)';
	    document.getElementById('gear3').style.oTransform = 'rotate(' + st3 + 'deg)';
	    document.getElementById('gear3').style.transform = 'rotate(' + st3 + 'deg)';
	    st1=st1+0.2;
	    st2=st2+0.5;
	    st3=st3+0.1;
	    if(st1>31){st1=0};
	    if(st2>31){st2=0};
	    if(st3>31){st3=0};
	},100);

});
