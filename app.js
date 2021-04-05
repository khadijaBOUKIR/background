document.addEventListener('DOMContentLoaded', function() {

    let i = 15;
    let top = 120;
    let left = 150;
    for (i; i < 20; i++) {
        let mydiv = document.createElement('div'); // let mydiv = <div></div>
        mydiv.classList.add("content");
        mydiv.classList.add(`content-${i}`);
        mydiv.style.width = "20px";
        mydiv.style.height = "20px"
        mydiv.style.borderRadius = "50%";
        mydiv.style.backgroundColor = "red";
        mydiv.style.top = `${top}px`;
        mydiv.style.left = `${left}px`;
        top = top + 15;
        left = left + 15;
        document.body.appendChild(mydiv);
    }

}, false);