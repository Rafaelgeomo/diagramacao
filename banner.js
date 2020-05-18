console.log("===Banner===");
// setup
var photos= ["carros1.jpg","carros2.jpg","carros3.jpg","carros4.jpg","carros5.jpg"];
var title= ["Prazer ao Dirigir","Ganhadores do Ano","Novo Fushion","Melhor Sedan","Melhor Custo Beneficio"];
var position=0;

function next () {
    show(photos[position],title[position]);
   if(position<photos.length-1) {
    position=position+1;

   } else {
       position=0;
   }
}
function show (photo,title){
    document.querySelector(".main-highlight-image").src=photo;
    document.querySelector(".main-highlight-title").textContent=title;
    $("a.active").removeClass("active")
    $(".bullets a").eq(position).addClass("active");
}
var control=setInterval(next,3000);

//criar a bolinha para mudar a foto na tela

function generateBullets (qtd) {

    for (var i=0; i<qtd; i++){
    var bullet = $("<a>").html("&bullet; ").attr("href","#").data("id",i);
    $(".bullets").append(bullet);
    } 
    $(".bullets a").eq(position).addClass("active");
}
generateBullets(photos.length);

function activate () {
    position=($(this).data("id"));
    clearInterval(control);
    show(photos[position],title[position]);


}
$(".bullets a").on("click", activate);