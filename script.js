//your JS code here. If required.
let selectedValue = document.querySelector("#colorSelect");
let select = document.querySelector("input");
selectedValue.addEventListener("change" ,  data => {
	selectedValue.remove(data.selectedIndex)
	
})