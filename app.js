let showBtn = document.getElementById("addBtn");
let inputDiv= document.getElementById("inputContainer");

showBtn.addEventListener("click", function(){
    inputDiv.style.display = "block";
    showBtn.style.display = "none";
});