document.addEventListener('DOMContentLoaded', function() {
    let positiondimention = (width, height, bgcolor, top, left) =>
        `
        width: ${width};
        height: ${height};
        background-color: ${bgcolor};
        top: ${top};
        left: ${left};
        `
    let css = `${positiondimention('80px', '20px', 'red', '200px', '500px')} `;
    let i = 1;
    let top = 120;
    let left = 150;
    let nbdiv = 150;
    let backgroundColor = colors(nbdiv);
    let width = [10, 15, 20, 22, 10, 15, 20, 10, 15, 20, 22, 10, 15, 20];
    let height = [10, 15, 20, 22, 10, 15, 20, 10, 15, 20, 22, 10, 15, 20];
    for (i; i < nbdiv; i++) {
        let mydiv = document.createElement('div');
        mydiv.style = css;
        mydiv.classList.add("content");
        mydiv.classList.add(`content-${i}`);
        top = top + 15;
        left = left + 15;
        document.body.appendChild(mydiv);
    }

    function colors(nbdiv) {
        let color = [];
        let rgb = [];;
        let nbcolor = nbdiv / 3;
        if (nbcolor = Math.floor(nbcolor))
            nbcolor = Math.floor(nbcolor) + 1
        for (let i = 0; i < nbcolor + 1; i++) {
            let n = `0, 0, ${i*15}`;
            rgb.push(n)
            let m = `0, ${i*15}, 0`;
            rgb.push(m)
            let o = `${i*15}, 0, 0`;
            rgb.push(o)
        }
        color.push(rgb);
        return color;
    }
}, false);