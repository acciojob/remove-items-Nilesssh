//your JS code here. If required.
let selectedValue = document.querySelector("#colorSelect");
let select = document.querySelector("input");
select.addEventListener("click" ,  data => {
	selectedValue.remove(data.selectedIndex)
	
})