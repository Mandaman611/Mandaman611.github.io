var photos = new Array()
var which = 0

//define images. You can have as many as you want:
photos[0] = "http://redstone119.alwg.cap.gov/media/photos/Events/Tower%20Tour/Tracon.jpg"
photos[1] = "https://i.stack.imgur.com/guo3B.png"
photos[2] = "http://avstop.com/news_feb_2010/new_york_tracon.jpg"
photos[3] = "http://www.dailyherald.com/storyimage/DA/20140926/news/140928754/EP/1/1/EP-140928754.jpg&updated=201409261404&MaxW=800&maxH=800&noborder"
photos[4] = "http://www.flypierce.com/wp-content/uploads/2010/02/Potomac_Consolidated_TRACON.jpg"
photos[5] = "http://i.space.com/images/i/000/002/458/i02/070510_atc_sim_02.jpg?1292265651"
photos[6] = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4Nx1k_01vvOBFflnJ2Arr4s_utcCfxgTNFCsyx3JfhhEo-zlvGw"
photos[7] = "http://cdn.newsday.com/polopoly_fs/1.3802783.1340593953!/httpImage/image.JPG_gen/derivatives/display_600/image.JPG"
photos[8] = "https://pbs.twimg.com/media/BzDjIG8CUAE_2Y4.jpg"
photos[9] = "http://cdn.ifr-magazine.com/media/newspics/288/p18u6o9r1n190e11an70m1os31m6n7.jpg"
photos[10] = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmOJkihaDFFu-61on5YKoXPQ4Xm1n-fi9_ZY4Ux8EhnILaBz69zA"
photos[11] = "http://www.gannett-cdn.com/-mm-/a7b07c753ef8f037cab081e916d3453d074ef531/c=48-0-2977-2208&r=x404&c=534x401/local/-/media/USATODAY/test/2013/09/16/1379335275000-AP-Airport-Go-Arounds.jpg"
photos[12] = "https://cbpowell.files.wordpress.com/2010/10/console_1.png"
photos[13] = "http://i90.natca.net/wp-content/uploads/2015/10/houstontracon.png"
photos[14] = "https://s-media-cache-ak0.pinimg.com/originals/30/19/27/30192741fdf4c8a2ca331a49e548e2c5.jpg"

//Specify whether images should be linked or not (1=linked)
var linkornot = 0

//do NOT edit pass this line

var preloadedimages = new Array()
for (i = 0; i < photos.length; i++) {
    preloadedimages[i] = new Image()
    preloadedimages[i].src = photos[i]
}


function applyeffect() {
    if (document.all && photoslider.filters) {
        photoslider.filters.revealTrans.Transition = Math.floor(Math.random() * 23)
        photoslider.filters.revealTrans.stop()
        photoslider.filters.revealTrans.apply()
    }
}



function playeffect() {
    if (document.all && photoslider.filters)
        photoslider.filters.revealTrans.play()
}

function keeptrack() {
    window.status = "Image " + (which + 1) + " of " + photos.length
}


function backward() {
    if (which > 0) {
        which--
        applyeffect()
        document.images.photoslider.src = photos[which]
        playeffect()
        keeptrack()
    }
}

function forward() {
    if (which < photos.length - 1) {
        which++
        applyeffect()
        document.images.photoslider.src = photos[which]
        playeffect()
        keeptrack()
    }
}
