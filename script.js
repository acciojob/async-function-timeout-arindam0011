//your JS code here. If required.
document.addEventListener("DOMContentLoaded", ()=>{
const button=document.getElementById("btn");
const output= document.getElementById("output");

button.addEventListener("click",()=>{
	const text = document.getElementById("text").value;
	const delay= document.getElementById("delay").value;
	
	
       
	
		let display=setInterval(function(){
		output.innerText=text;
		 clearInterval(displayl);
		}, parseInt(delay))
	
	
})
	
})
