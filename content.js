
window.onload=function(){
	javascript: (function() {
	  setInterval(function() {
		   var $skip1 = document.getElementsByClassName("ytp-ad-skip-button")[0];
		   if ($skip1 != undefined) {
			   $skip1.click();
			   console.log('Ad skipped');
		   }
		   
		   var $skip2 = document.getElementsByClassName("ytp-ad-overlay-close-button")[0];
		   if ($skip2 != undefined) {
			   $skip2.click();
			   console.log('Ad popup closed');
		   }
	  }, 1000);
	  
	  console.log('YouTube auto skip 1.1 loaded!');
	})();
}