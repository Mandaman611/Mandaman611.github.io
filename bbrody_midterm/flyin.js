if (document.getElementById || document.all)
    var crossheader = document.getElementById ? document.getElementById("flyin").style : document.all.flyin.style

function animatein() {
    if (parseInt(crossheader.left) < 0)
        crossheader.left = parseInt(crossheader.left) + 20 + "px"
    else {
        crossheader.left = 0
        crossheader.fontStyle = "normal"
        clearInterval(start)
    }
}

if (document.getElementById || document.all)
    start = setInterval("animatein()", 50)