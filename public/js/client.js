(function() {
	"use strict";

	// Socket.io
	var socket = io.connect();
	socket.on('Welcome', function () {
		alert('Welcome !');
	});

	// Canvas & drawing
	var canvas = document.getElementById("draw-space")
	, 	ctx = canvas.getContext("2d")
	,	firstClick = true
	,	x, y;

	canvas.addEventListener('click', function (event) {
		x = event.x;
		y = event.y;

		if (firstClick)
		{
			ctx.moveTo(x, y);
			ctx.lineTo(x+1, y+1);
			ctx.stroke();
			firstClick = false;
		}
		else
		{
			ctx.lineTo(x, y);
			ctx.stroke();
		}
	});

})();