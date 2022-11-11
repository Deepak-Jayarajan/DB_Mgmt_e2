const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



// javascript code to show/hide password and change icon
pwShowHide.forEach(eyeIcon =>{
	eyeIcon.addEventListener("click", ()=>{
		pwFields.forEach(pwField =>{
			if(pwField.type ==="password"){
				pwField.type = "text";

				pwShowHide.forEach(icon =>{
					icon.classList.replace("uil-eye-slash", "uil-eye");
				})
			}else{
				pwField.type = "password";

				pwShowHide.forEach(icon =>{
					icon.classList.replace("uil-eye", "uil-eye-slash");
				})
			}
		}) 
	})
})
