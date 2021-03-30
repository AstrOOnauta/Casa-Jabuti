/* 
    Inicializa o carrossel de imagens Slick Slider/
*/
$('.slider').slick();
/*
    Javascript que realiza o cálculo dos valores das diárias de acordo com a data de check-in e check-out,
    e a suíte escolhida/

*/
function check() {
    var date1 = new Date(document.getElementById('checkin').value);
    var date2 = new Date(document.getElementById('checkout').value);
    var diff = Math.abs(date2.getTime() - date1.getTime());
    var days = Math.ceil(diff / (1000 * 3600 * 24));
    var bedroom = document.getElementById('bedroom').value;
    var estimative = days +" Diárias: ~R$ "+ bedroom*days + ",00!!!";
        if(date1  > date2){ 
            alert("Data de Check-in não pode ser posterior à data de Check-out!")
        }
        else {
            alert(estimative);
        }
}
/*
    Javascript do mapa da google que é possível ser visualizado no site com a marcação da Casa Jabuti/
    Google map's javascript that's possible to be viewed in website with Jabuti's House marker
*/
function initMap() {
    const uluru = { lat: -6.2385778, lng: -35.0450786 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}