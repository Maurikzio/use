var modalLviv = document.getElementById('toModalLviv');
var modalKiev = document.getElementById('toModalKiev');
var modalIvano = document.getElementById('toModalIvano');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modal-img'); 
var close = document.getElementById('toClose');
var cityDescription = document.getElementById('city-description');
var uniList = document.getElementById('universities-list');
var isClosed = true;

var modalQuito = document.getElementById('modal-quito');
var modalStoD = document.getElementById('modal-stoD');
var theMap = document.getElementById('map');

// var lvivUniversities = ["Universidad Politecnica de Lviv", "universidad de Medicina de Lviv", "Universidad ivano Franco Lviv", "Universidad de comercio y economia de Lviv", "Universidad de cultura fisica", "Academia nacional de musica de Lviv"];

// var kievUniversities = ["Universidad acional de kiev aras Shevchenko", "Universidad politecnica nacional Igos Sicorsky kiev", "univetrsidad de aviacion de Kiev"];

// var ivanoUniversities = ["Universidadtecnica nacional de petroleo y gas Ivano-Frankivsk"];

var lvivUniversities = [
    {name: "Universidad Politecnica de Lviv", url: "http://lp.edu.ua/en"},
    {name: "Universidad de Medicina de lviv", url: "http://www.meduniv.lviv.ua/"},
    {name: "Universidad Ivano Franko Lviv", url: "http://www.lnu.edu.ua/"},
    {name: "Universidad de Comercion y Economia de Lviv", url: "http://www.lute.lviv.ua/?L=2"},
    {name: "Universidad de Cultura Fisica", url: "http://www.ldufk.edu.ua/"},
    {name: "Universidad Nacional de Musica de Lviv", url: "http://conservatory.lviv.ua/en/home/lnma/ "}
];

var kievUniversities = [
    {name: "Universidad Nacional de Kiev Taras Shevchenko", url: "http://www.univ.kiev.ua/en/"},
    {name: "Universidad politécnica nacional Igor Sicorsky kiev", url: "http://kpi.ua/"},
    {name: "Universidad de aviación de Kiev", url: "http://ukraine.admission.center/es/universities/aviation/national-aviation-university/"},
];

var ivanoUniversities = [
    {name: "Universidad Técnica Nacional de Petróleo y Gas Ivano-Frankivsk", url: "http://nung.edu.ua/"}
];

function showUniversities(theList, where){
    for(var i = 0; i < theList.length; i++){
        var theLi = document.createElement("LI");
        var theLink = document.createElement("A");
        var tLi = document.createTextNode(theList[i].name);
        var tLink = document.createTextNode("visit site");
        theLi.appendChild(tLi);
        theLi.className = "newLi";
        theLink.appendChild(tLink);
        theLink.href = theList[i].url;
        theLink.target = "_blank";
        document.getElementById(where).appendChild(theLi);
        // document.getElementById("newLi").appendChild(theLink);  
        document.getElementsByClassName("newLi")[i].appendChild(theLink);      
    }
}

let lvivDescription = `Considerada como la capital cultural de Ucrania, Lviv tiene una arquitectura fascinante es una de las ciudades más bellas de este país. Lviv es muy famosa por sus hermosas calles, sus espléndidas iglesias, sus fascinantes museos y su encantador estilo de cultural.
Es una ciudad muy agradable con un ambiente familiar, presenta una amplia variedad de restaurantes temáticos, bares geniales y una animada vida nocturna. Es sin lugar a duda una de las ciudades que acoge cada año a miles de estudiantes extranjeros y a miles de turistas.`;
let kievDescription = `Kiev no solo es la ciudad capital también es una de las ciudades más prominentes del este de Europa también conocida como Madre de las Ciudades¨, debido a que es una de las localidades más antiguas de Europa. 
Acá podemos encontrar desde Cúpulas doradas de impresionantes iglesias, hasta impresionantes museos que cuentan la historia de la segunda guerra mundial además de una gran variedad de arquitectura y por supuesto una vida urbana que nunca se detiene hacen de Kiev una ciudad multicultural que recibe millones de estudiantes de diferentes nacionalidades cada año.`;
let ivanoDescription = `Esta ciudad es la puerta de entrada a los famosos Cárpatos una de las maravillas naturales de ucrania, es una ciudad con un encanto inolvidable con sus edificios diseñados de diferentes estilos.
Es una ciudad muy conocida ya que alberga muchos estudiantes que desean seguir carreras de ingeniería en petróleos y gas.`;
modalLviv.onclick = function(){
    modal.style.display = 'block';
    modalImg.style.backgroundImage = "url('../images/destiny/lviv.jpg')";  
    cityDescription.innerText = `${lvivDescription}`;
    uniList.innerText = `UNIVERSITIES OF LVIV`;
    showUniversities(lvivUniversities, "universities-list");
}
modalKiev.onclick = function(){
    modal.style.display = 'block';
    modalImg.style.backgroundImage = "url('../images/destiny/kiev.jpg')";  
    cityDescription.innerText = `${kievDescription}`;
    uniList.innerText = `UNIVERSITIES OF KIEV`;
    showUniversities(kievUniversities, "universities-list");    
}
modalIvano.onclick = function(){
    modal.style.display = 'block';
    modalImg.style.backgroundImage = "url('../images/destiny/ivano2.jpg')";   
    cityDescription.innerText = `${ivanoDescription}`;
    uniList.innerText = `UNIVERSITIES OF IVANO FRANKIVSK`; 
    showUniversities(ivanoUniversities, "universities-list");   
}

close.onclick = function(){
    modal.style.display = 'none';
    isClosed = true;       
}

modalQuito.onclick = function(){
    theMap.style.display = 'block';
    theMap.style.margin = 'auto';        
    initMap(-0.264396, -78.536672);
}
modalStoD.onclick = function(){
    theMap.style.display = 'block';
    theMap.style.margin = 'auto';    
    initMap(-0.253929, -79.168334);
}

//mapa
function initMap(lat, lng){
    var location = {
        lat: lat,
        lng: lng
    };
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 18,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

//boton up
function myScroll(go){
    $('HTML, BODY').animate({ scrollTop: go}, 800);
    return false;
}

//animation
$(".location").one("click mouseenter", function() {
    // alert('is working');
    $('#my-arrow').addClass('animated bounceInLeft');
    document.getElementById('my-arrow').style.display = "block";   
});
