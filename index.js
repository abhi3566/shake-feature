window.onload = function() {
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 15
    });

    // get the user mobile number and coupon value from the url

    // var url = window.location.href;
    // var mobile = url.split('?')[1].split('&')[0].split('=')[1];
    // var coupon = url.split('?')[1].split('&')[1].split('=')[1];

    // call api to get the coupon value and mobile number using axios

    var random = Math.floor(Math.random() * 100);
    const options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/'+random,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        // get random id each time
        // var random = Math.floor(Math.random() * 100);
        // get the mobile number and coupon value from the api response
        // var mobile = response.data[random].userId;
        var coupon = response.data.title;
        // display the coupon value to the user
        console.log(coupon);
        document.getElementById('coupon').innerHTML = coupon;
        // display the mobile number to the user
        // document.getElementById('mobile').innerHTML = mobile;
    }).catch(function (error) { 
        console.error(error);
    });

        





    






    // start listening to device motion
    myShakeEvent.start();
    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);
    //shake event callback
    function shakeEventDidOccur () {
        //put your own code here etc.
        // alert('Shake!');
        // remove gif and show coupon
        document.getElementById('gif').style.display = 'none';
        // remove h3 of id remo
        document.getElementById('remo').style.display = 'none';
        document.getElementById('delo').style.display = 'none';
        // display gif2
        document.getElementById('gif2').style.display = 'block';
        // display the coupon value to the user
        document.getElementById('coupon').style.display = 'block';
        // capture the date and time of shake
        var d = new Date();
        var n = d.getTime();
        // append the coupon date and time to the coupon class as p tag
        var p = document.createElement('p');
        p.innerHTML = n;
        document.getElementById('coupon').appendChild(p);

        // stop listening to device motion
        myShakeEvent.stop();
        
        // call api to save the coupon value and mobile number with the date and time

        
    }
};
