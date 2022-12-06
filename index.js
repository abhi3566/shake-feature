window.onload = function() {
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 15
    });

    // get the user mobile number and coupon value from the url

    // var url = window.location.href;
    // var mobile = url.split('?')[1].split('&')[0].split('=')[1];
    // var coupon = url.split('?')[1].split('&')[1].split('=')[1];

    

    

    // start listening to device motion
    myShakeEvent.start();
    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);
    //shake event callback
    function shakeEventDidOccur () {
        //put your own code here etc.
        alert('Shake!');
        // remove gif and show coupon
        document.getElementById('gif').style.display = 'none';
        // display the coupon value to the user
        document.getElementById('coupon').style.display = 'block';
        // capture the date and time of shake
        var d = new Date();
        var n = d.getTime();
        // append the coupon date and time to the coupon class as p tag
        var p = document.createElement('p');
        p.innerHTML = n;
        document.getElementById('coupon').appendChild(p);
        
    }
};
