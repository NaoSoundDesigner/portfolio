const cursor = document.querySelector(".cursor-inner");
const cursor2 = document.querySelector(".cursor-outer");
document.addEventListener("mousemove", e=>{
    cursor.style.top = e.pageY
    cursor.style.left = e.pageX
})