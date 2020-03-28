const panels = document.querySelectorAll(".panel");


function toggleOpen() {

    this.classList.toggle("open")
}

function transitionText(e) {
    // var temp = this.classList.toggle("open-active");
    //console.log(temp);
    // console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", transitionText))
