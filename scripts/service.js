 // create modals for portfolios

var btn = document.getElementsByClassName("click-to-open");

for (var i = 0; i < btn.length; i++) {
  var thisBtn = btn[i];
  thisBtn.addEventListener("click", function(){
    var modal = document.getElementById(this.dataset.modal);
    var span = document.getElementById(this.dataset.modal).getElementsByClassName("close")[0];
    modal.style.opacity = "1";
    modal.classList.add('visible');
 	window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.classList.remove('visible');


    }
};

span.onclick = function(event) {
	
    modal.style.opacity = "0";
    modal.classList.remove('visible');


}


}, false);

}
