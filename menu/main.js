let j = 1
const click1 = event => {
    if (j === 1) {
        document.getElementsByClassName("coco2")[0].style.display = 'none'
        document.getElementsByClassName("coco2")[1].style.display = 'none'
        document.getElementsByClassName("coco2")[2].style.display = 'none'
        j = 0
    }
    else {
        document.getElementsByClassName("coco2")[0].style.display = 'revert'
        document.getElementsByClassName("coco2")[1].style.display = 'revert'
        document.getElementsByClassName("coco2")[2].style.display = 'revert'
        j = 1
    }
}