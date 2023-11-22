//your JS code here. If required.
const img=document.getElementsByClassName("panel");
console.log(img);
let active_ele=document.getElementsByClassName("active")[0];
for(let i=0;i<img.length;i++){
	let ele=img[i];
	ele.addEventListener("click",()=>{
		active_ele.classList.remove("active");
		ele.classList.add("active");
		active_ele=ele;
	})
}
