

const lo = (e) => {
    var so = document.getElementById("kik")
    console.log(e.target.value) 
    so.textContent += " " +e.target.value

}
document.addEventListener('change', lo) 

