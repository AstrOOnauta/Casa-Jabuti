/* 
    Inicializa o carrossel de imagens Slick Slider/
*/
$('.slider').slick({
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
});
const nextArrow = document.getElementsByClassName("slick-next")
const prevArrow = document.getElementsByClassName("slick-prev")
nextArrow[0].innerHTML = ""
nextArrow[0].className = "slick-next fas fa-chevron-right"
prevArrow[0].innerHTML = ""
prevArrow[0].className = "slick-prev fas fa-chevron-left"

/*
    Javascript que realiza o cálculo dos valores das diárias de acordo com a data de check-in e check-out,
    e a suíte escolhida/

*/
function check() {
    var date1 = new Date(document.getElementById('checkin').value)
    console.log(date1)
    var date2 = new Date(document.getElementById('checkout').value)
    var diff = Math.abs(date2.getTime() - date1.getTime())
    var days = Math.ceil(diff / (1000 * 3600 * 24))
    var bedroom = document.getElementById('bedroom').value
    var estimative = days +" Diárias: ~R$ "+ bedroom*days + ",00!!!"
    
    if(date1 == "Invalid Date" || date2 == "Invalid Date" || bedroom === ""){
        alert("Forneça as informações necessárias para estimar o orçamento!")
    }else if(date1  > date2){ 
        alert("Data de Check-in não pode ser posterior à data de Check-out!")
    }else {
        alert(estimative);
    }
}

//Get the top button:
toTopButton = document.getElementById("toTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*
    Javascript do mapa da google que é possível ser visualizado no site com a marcação da Casa Jabuti/
    Google map's javascript that's possible to be viewed in website with Jabuti's House marker
*/
function initMap() {
    const uluru = { lat: -6.2385778, lng: -35.0450786 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}