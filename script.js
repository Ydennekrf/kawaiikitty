// basic javascript media queries only used to target the d attribute of the path of my custom SVGs.
// had to add an adjustment to the startOffset value that adjusts where the text starts along the path.

let screenHandle = () => {

    if(window.matchMedia('screen and (min-width: 320px)').matches) {
        document.getElementById('curve-t-l').setAttribute('d', "M 15,90 A90,90 0 0 1 90,15")
        document.getElementById('txt-curve-t-l').setAttribute('startOffset',"30")
        document.getElementById('curve-t-r').setAttribute('d', "M 0,15 A90,90 0 0 1 75,92")
        document.getElementById('txt-curve-t-r').setAttribute('startOffset',"33")
        document.getElementById('curve-b-l').setAttribute('d', "M 10,0 A90,90 0 0 0 117,83")
        document.getElementById('txt-curve-b-l').setAttribute('startOffset',"30")
        document.getElementById('curve-b-r').setAttribute('d', "M 0,82 A90,90 0 0 0 82,0")
        document.getElementById('txt-curve-b-r').setAttribute('startOffset',"27")
    }
    if(window.matchMedia('screen and (min-width: 375px)').matches) {
        document.getElementById('curve-t-l').setAttribute('d', "M 20,97 A90,90 0 0 1 90,25")
        document.getElementById('txt-curve-t-l').setAttribute('startOffset',"30")
        document.getElementById('curve-t-r').setAttribute('d', "M 10,22 A90,90 0 0 1 84,94")
        document.getElementById('txt-curve-t-r').setAttribute('startOffset',"33")
        document.getElementById('curve-b-l').setAttribute('d', "M 15,10 A90,90 0 0 0 125,93")
        document.getElementById('txt-curve-b-l').setAttribute('startOffset',"30")
        document.getElementById('curve-b-r').setAttribute('d', "M 10,93 A90,90 0 0 0 92,10")
        document.getElementById('txt-curve-b-r').setAttribute('startOffset',"27")
    }
    if(window.matchMedia('screen and (min-width: 425px)').matches) {
        document.getElementById('curve-t-l').setAttribute('d', "M 29,100 A90,90 0 0 1 100,29")
        document.getElementById('txt-curve-t-l').setAttribute('startOffset',"30")
        document.getElementById('curve-t-r').setAttribute('d', "M 19,25 A90,90 0 0 1 88,90")
        document.getElementById('txt-curve-t-r').setAttribute('startOffset',"33")
        document.getElementById('curve-b-l').setAttribute('d', "M 20,15 A90,90 0 0 0 129,100")
        document.getElementById('txt-curve-b-l').setAttribute('startOffset',"30")
        document.getElementById('curve-b-r').setAttribute('d', "M 15,102 A90,90 0 0 0 102,15")
        document.getElementById('txt-curve-b-r').setAttribute('startOffset',"27")
    }
    if(window.matchMedia('screen and (min-width: 768px)').matches) {
        document.getElementById('curve-t-l').setAttribute('d', "M 35,220 A200,200 0 0 1 200,45")
        document.getElementById('txt-curve-t-l').setAttribute('startOffset',"90")
        document.getElementById('curve-t-r').setAttribute('d', "M 0,35 A200,200 0 0 1 170,210")
        document.getElementById('txt-curve-t-r').setAttribute('startOffset',"90")
        document.getElementById('curve-b-l').setAttribute('d', "M 20,0 A200,200 0 0 0 200,185")
        document.getElementById('txt-curve-b-l').setAttribute('startOffset',"75")
        document.getElementById('curve-b-r').setAttribute('d', "M 0,192 A200,200 0 0 0 195,10")
        document.getElementById('txt-curve-b-r').setAttribute('startOffset',"70")
    }
    if(window.matchMedia('screen and (min-width: 1024px)').matches) {
        document.getElementById('curve-t-l').setAttribute('d', "M30,70 A200,200 0 0 1 129,70")
        document.getElementById('txt-curve-t-l').setAttribute('startOffset',"0")
        document.getElementById('curve-t-r').setAttribute('d', "M35,70 A200,200 0 0 1 129,70")
        document.getElementById('txt-curve-t-r').setAttribute('startOffset',"0")
        document.getElementById('curve-b-l').setAttribute('d', "M23,70 A200,200 0 0 1 149,83")
        document.getElementById('txt-curve-b-l').setAttribute('startOffset',"0")
        document.getElementById('curve-b-r').setAttribute('d', "M7,70 A200,200 0 0 1 179,83")
        document.getElementById('txt-curve-b-r').setAttribute('startOffset',"0")
    }
    if(window.matchMedia('screen and (min-width: 1440px)').matches) {
        document.getElementById('curve-t-l').setAttribute('d', "M55,55 A200,200 0 0 1 149,55")
        document.getElementById('txt-curve-t-l').setAttribute('startOffset',"0")
        document.getElementById('curve-t-r').setAttribute('d', "M65,55 A200,200 0 0 1 149,55")
        document.getElementById('txt-curve-t-r').setAttribute('startOffset',"0")
        document.getElementById('curve-b-l').setAttribute('d', "M60,55 A200,200 0 0 1 179,55")
        document.getElementById('txt-curve-b-l').setAttribute('startOffset',"0")
        document.getElementById('curve-b-r').setAttribute('d', "M37,55 A200,200 0 0 1 179,55")
        document.getElementById('txt-curve-b-r').setAttribute('startOffset',"0")
    }
    if(window.matchMedia('screen and (min-width: 1920px)').matches) {
        document.getElementById('curve-t-l').setAttribute('d', "M95,55 A200,200 0 0 1 249,80")
        document.getElementById('txt-curve-t-l').setAttribute('startOffset',"0")
        document.getElementById('curve-t-r').setAttribute('d', "M105,55 A200,200 0 0 1 249,80")
        document.getElementById('txt-curve-t-r').setAttribute('startOffset',"3")
        document.getElementById('curve-b-l').setAttribute('d', "M35,80 A200,200 0 0 1 249,90")
        document.getElementById('txt-curve-b-l').setAttribute('startOffset',"60")
        document.getElementById('curve-b-r').setAttribute('d', "M75,65 A200,200 0 0 1 279,110")
        document.getElementById('txt-curve-b-r').setAttribute('startOffset',"0")
    }

};
//fires event listener any time the screens size changes
window.addEventListener("resize", screenHandle);
//fires event listener on load up
window.addEventListener("load", screenHandle);
