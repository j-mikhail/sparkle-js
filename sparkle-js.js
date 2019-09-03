// sparkle-js v0.1
// by Jonathan Mikhail
// https://github.com/j-mikhail/sparkle-js
//
// Adapted from several code samples:
//   - https://www.techumber.com/amazing-glitter-star-effect-using-pure-css3/
//   - https://dabblet.com/gist/10168919
//
// Features added:
//   - Star position randomized after each twinkle
//   - Stars are now transparent
//   - Reduced unnecessary code and elements
//   - Speed optimization
//
// Arguments:
//   - e: DIV element on which stars should be superimposed
//   - numStars: Number of stars to twinkle simultaneously

function sparkle(e, numStars) {

    var curStars = 0; // Current number of stars

    loop = {
        //Check if star needs to be created
        start: function() {
            if (curStars < numStars) {
                this.aStar();
            };
        },
        //Create DOM element for star
        newStar: function() {
            var f = document.createElement('figure');
            f.className = "star";
            return f;
        },
        //Create star and determine random position
        aStar: function() {
            var star = this.newStar();
            star.style.top = e.offsetTop + (Math.random() * e.clientHeight) + 'px';
            star.style.left = e.offsetLeft + (Math.random() * e.clientWidth) + 'px';
            e.appendChild(star);
            curStars++;
            setTimeout(function () {
                e.removeChild(star);
                curStars--;
            }, 1500);
        },
    };

    setInterval(function () {
        loop.start();
    }, 1500 / numStars);

}