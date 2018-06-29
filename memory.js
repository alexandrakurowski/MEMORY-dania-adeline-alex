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


/* function shuffle(card_arr)
{
   var j = 0;
   var valI = '';
   var valJ = valI;
   var l = card_arr.length - 1;

   while(l > -1)
   {
		j = Math.floor(Math.random() * l);
		valI = card_arr[l];
		valJ = card_arr[j];
		card_arr[l] = valJ;
		card_arr[j] = valI;
		l = l - 1;
	}
	console.log(card_arr);
	return card_arr;
 };
console.log(carte);*/







