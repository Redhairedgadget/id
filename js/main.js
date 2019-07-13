

// Loader

$(window).on("load", function(){
    setTimeout(function(){
        $('#loader').fadeOut();
    }, 1000);

    setTimeout(function(){
        $('#loaded').fadeIn();
    }, 1500);
});

// Countdown
let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

let x = setInterval(function () {

    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML =
          '<div class="col-4 col-sm-3 text-white"><span class="number font-weight-bold">' + days + '</span><span class="d-block font-weight-bold h5 mt-3 text-uppercase">Days</span></div>'
        + '<div class="col-4 col-sm-3 text-white"><span class="number font-weight-bold">' + hours + '</span><span class="d-block font-weight-bold h5 mt-3 text-uppercase">Hours</span></div>'
        + '<div class="col-4 col-sm-3 text-white"><span class="number font-weight-bold">' + minutes + '</span><span class="d-block font-weight-bold h5 mt-3 text-uppercase">Minutes</span></div>'
        + '<div class="col-4 col-sm-3 text-white"><span class="number font-weight-bold">' + seconds + '</span><span class="d-block font-weight-bold h5 mt-3  text-uppercase">Seconds</span></div>'

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }

}, 1000);

// Newsletter
const Url = "https://jsonplaceholder.typicode.com/posts";

$('form[name=email]').submit(function(event){

    // Sign-up message with email
    event.preventDefault();
    let email = document.getElementById("email");
    document.getElementById('response').innerHTML =
        '<p>Congratulations! You signed up successfully!</p>'
        +'<p>Received email: ' + email.value + '</p>';

    // Request/response
    let newElement = document.createElement('p');
    $.get(Url, function(data){
        document.getElementById('response').appendChild(newElement);
        newElement.innerText = "Response from first post on 'https://jsonplaceholder.typicode.com/posts': " + "\n" + data[1].body;
    });

    $('#modal').modal('show');
});

