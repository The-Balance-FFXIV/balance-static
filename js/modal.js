// Open the Modal
function openModal(clicked_id) {
    var src = document.getElementById(clicked_id).src;
    if (src.includes("#")) {
      src = src.substring(0, src.indexOf( "#" ));
    };
    document.getElementById("modalPic").src = src;
    document.getElementById("myModal").style.display = "block";
    // Ensures the site footer is not shown if front of the modal
    document.getElementById("site-footer").style.display = "hidden";
}
  
// Close the Modal
function closeModal() { 
    // prevents flashing last modal image while new id is loading on open
    document.getElementById("modalPic").src = "";
    document.getElementById("myModal").style.display = "none";
    // See note above regarding the footer 
    document.getElementById("site-footer").style.display = "block";
}
