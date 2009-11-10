// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
var app = {
	unicorns: function()
	{
	  var emitUnicorn = function()
	  {
	    var img = document.createElement("IMG");
	    img.src = "/images/unicorn.png";
	    img.style.position = "fixed";
	    img.style.left = Math.floor(((Math.random() * window.innerWidth) * 0.60) + 0.20).toString() + "px";
	    img.style.top = Math.floor(((Math.random() * window.innerHeight) * 0.60) + 0.20).toString() + "px";
	    img.style.display = "none";
	    document.body.appendChild(img);
	    
	    img.onload = function() {
	      new Effect.Grow(img, {
	        duration: Math.random() * 5,
	        afterFinish: function() {
	          Effect.Fade(img, { afterFinish: function() {
	            document.body.removeChild(img);
	          } });
	        }
	      });
	    }
	  }
	  
	  setInterval(emitUnicorn, 1000);
	}
}
