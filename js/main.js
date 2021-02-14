// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");

    var y = document.getElementById(tabName);
    if (y.style.display === "none") {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function rotateButton(arrow) {
    var x = document.getElementById("col1");
    var y = document.getElementById("col2");
    var z = document.getElementById("col3");
    var btns = document.getElementById(arrow);

    if (x.classList.contains('active')) {
        if (arrow == "col1") {
            btns.classList.toggle("active");
        } else {
            x.classList.toggle("active");
            btns.classList.toggle("active");
        }
    } else if (y.classList.contains('active')) {
        if (arrow == "col2") {
            btns.classList.toggle("active");
        } else {
            y.classList.toggle("active");
            btns.classList.toggle("active");
        }
    } else if (z.classList.contains('active')) {
        if (arrow == "col3") {
            btns.classList.toggle("active");
        } else {
            z.classList.toggle("active");
            btns.classList.toggle("active");
        }
    } else {

        btns.classList.toggle("active");
    }
}


function openContact(tabName) {
    var y = document.getElementById(tabName);

    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

    var acc = document.getElementById("contact_button");
    acc.classList.toggle("active");
}

function scrollFunction() {
    //Get the button
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}