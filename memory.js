console.log("hello");

var prenom = $("#prenom");
var val = $("#valider");
var choix = $("#choix");
var jouer = $("#jouer");
var choix6 = $("#choix6");
var compteur = $("#compteur");
var prenom = $("#prenom");
var boutton= $("#boutton");

/*val.click(function (){
	
	$("prenom").val()

	return (prenom);


	boutton.hide();

});

console.log(prenom);

prenom.empty();*/

var carte = [1, 1, 2, 2, 3, 3];

function shuffle(carte){  /* FONCTION PLACEMENT ALEATOIRE DES CARTES / Nathan */

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
	return carte;
};
	shuffle(carte);

		console.log (carte);


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
   array.push(image4);   }







