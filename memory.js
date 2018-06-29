console.log("hello");

var prenom = $("#prenom");
var val = $("#valider");
var choix = $("#choix");
var jouer = $("#jouer");
var choix6 = $("#choix6");
var compteur = $("#compteur");
var prenom = $("#prenom");
var boutton= $("#boutton");
var tapis= $("#tapis");

/*val.click(function (){
	
	$("prenom").val()

	return (prenom);


	boutton.hide();

});

console.log(prenom);

prenom.empty();*/

var im1 = $("#img1");
var im2 = $("#img2");
var im3 = $("#img3");
var im4 = $("#img4");
var im5 = $("#img5");
var im6 = $("#img6");

var carte = [];

carte.push(im1);
carte.push(im2);
carte.push(im3);
carte.push(im4);
carte.push(im5);
carte.push(im6);

console.log(carte);

function shuffle(){  /* FONCTION PLACEMENT ALEATOIRE DES CARTES / Nathan */

   		var j = 0;
   		var valI = '';
   		var valJ = valI;
   		var l = carte.length - 1;

  	 	while(l > -1)
  	 	{
		j = Math.floor(Math.random() * l);
		valI = carte[l];
		valJ = carte[j];
		carte[l] = valJ;
		carte[j] = valI;
		l = l - 1;
		}
	$("#tapis").html(carte);
	return carte;
};

shuffle();

$("#choix6").hide();
$("#tapis").show();



var compare = carte;

$("img").click(function()
{

    compare.push($(this).data("valeur"))
   

   var val = $(this).data("valeur")
   $(this).attr('src',val)

   });

   console.log(tapis);
/*
var image = new Image();
var image2 = new Image();
var image3 = new Image();
var image4 = new Image();

for(i=0; i<4; i++){
    
   image.src = 'astrefle.png';
   array.push(image);
   image2.src = 'ascarreau.png';
   array.push(image2);
   image3.src = 'ascoeur.png';
   array.push(image3);
   image4.src = 'astrefle.png';
   array.push(image4);   }*/


/*

$("#img1_valeur").hide();
$("#img2_valeur").hide();
$("#img3_valeur").hide();
$("#img4_valeur").hide();
$("#img5_valeur").hide();
$("#img6_valeur").hide();


$("#tapis img").click(function(){

	var id = $(this).attr('id');

	$( 'img' + id + '_valeur').show();
	
});*/




