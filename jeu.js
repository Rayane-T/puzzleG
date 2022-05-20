/*
NOM : Tayache
Prénom : Rayane
<<<<<<< HEAD
*/

// Voisin possible pour chaque case de 0 à 15
var possible_voisin = [[1, 4],[0, 2, 5],[1, 3, 6],[2, 7],[0, 5, 8],[1, 4, 6, 9],[2, 5, 7, 10],[3, 6, 11],[4, 9, 12],[5, 8, 10, 13],[6, 9, 11, 14],[7, 10, 15],[8, 13],[9, 12, 14],[10, 13, 15],[11, 14]];

function alea(min, max){ 
return Math.floor((Math.random()*(max-min))+min)
=======

*/

var possibilites_casevide_tab = [
    [1, 4],
    [0, 2, 5],
    [1, 3, 6],
    [2, 7],
    [0, 5, 8],
    [1, 4, 6, 9],
    [2, 5, 7, 10],
    [3, 6, 11],
    [4, 9, 12],
    [5, 8, 10, 13], 
    [6, 9, 11, 14],
    [7, 10, 15],
    [8, 13], 
    [9, 12, 14],
    [10, 13, 15],
    [11, 14]
];


function alea(min, max){ // [0;15[  // a implémenter!
  return Math.floor((Math.random()*(max-min))+min)
>>>>>>> c9623a2c802d9b6e81008f5f9915c4efd531b4b5
}

// Liste de 0 à 15 afin de parcourir chaque image plus tard.
var ordre_img = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 

function init (array){
  for(var c = 0; c < 16; c++){

<<<<<<< HEAD
    $('#puzzlearea').append('<div class="tuile" id="'+c+'"><p>'+c+' </p></div>');
      if (c == 15 ){
          break;
        }
      else{
        $("#"+c+"").css('background-image', `url(\"img/${"0"+array[c]}.jpg\")`);
      }
  }
}

//Initialisation du jquery 
$(function(){
  init(ordre_img);
});


function arr_sr(array){
array.sort(() => 0.5 - Math.random());
return array;
}

function check_and_swap(id_event, voisin_event){

  // Recupération des tuiles 
  tuiles = possible_voisin[id_event];
  var case_vide;
  var vide = false;

  $.each(tuiles, function(index, valeur) {
      // Vérification du texte en selectionnant le 1er élément de la div
      var check_tuile = $("#"+valeur+"")[0].innerText;
      // Verification : si la valeur est 15 alors la case est vide
      if (check_tuile === '15') {
          case_vide = valeur;
          vide = true;
      }
  });

  // Teste si la case est vide pour procèder au swap 
  if (vide) {
      $("#"+id_event+"").find('p').text(15);
      $("#"+id_event+"").css('background-image', `none`);
      $("#"+case_vide+"").find('p').text(voisin_event);
      $("#"+case_vide+"").css('background-image', `url(\"img/${"0"+voisin_event}.jpg\")`);
  }
}

function puzzle_solved(){
  solution = []; 
  for (var i = 0 ; i<16  ; i++){
    check_tuile = $("#"+i+"")[0].innerText;
    check_tuile = parseInt(check_tuile); 
    solution.push(check_tuile);
  }
  var resultat = true;
  for(var j = 0 ; j<16 ; j++){
    if (solution[j] != ordre_img[j])
      resultat = false ; 
  }

  if (resultat == true)
  alert("Puzzle Résolu, Felicitation!"); 
  ("#output").text("Vous avez gagner");
  $("#puzzlearea").off("click");

  /*
  $(output).append("<div> Félicitation, tu as finis le puzzle !</div>");
  $(output).off("click");
  Tentative avec l'ajout d'un div et le detachement de l'ecouteur d'évenement (ne marche pas)
  */
}


$("#puzzlearea").click(function(event) {
  var id_event = event.target.id;
  var voisin_event = event.target.innerText;
  var style = event.target.style['background-image'];
    // Verification des image avec les tuiles
  if(style != '') {
    check_and_swap(id_event, voisin_event);
  } 
puzzle_solved(); 

});

$( "#shuffle" ).click(function() {
    var arrayRandomized = arr_sr(ordre_img);
    for(var i = 0; i < 16; i++){
      var tmp = arrayRandomized[i]

      if (tmp === 15) {
        $("#"+i+"").css('background-image', `none`);
      } else {
        $("#"+i+"").css('background-image', `url(\"img/${"0"+tmp}.jpg\")`);
      }
      $("#"+i+"").find('p').text(tmp);
    }
});
=======
var img_ord = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 

function init (array){
  for(var compt = 0; compt < 16; compt++){

     $('#puzzlearea').append('<div class="tuile" id="'+compt+'"><p>'+compt+' </p></div>');
      if (compt == 15 ){
          continue;
        }
      else{
        $("#"+compt+"").css('background-image', `url(\"img/${"0"+array[compt]}.jpg\")`);
       }
  }
}

function arr_sr(array)
{
  array.sort(() => 0.5 - Math.random());
  return array;
}



function check_and_swap(idTarget, numberTarget)
{
  
    // on recupere les tuiles a verifier pour la case clicker 
    tuiles = possibilites_casevide_tab[idTarget];
    var idtuileBlank;
    var isBlank = false;

    $.each(tuiles, function(index, value) {
        // on selectionne le premiere élement de la div , en clair on verifie le texte
        var valueFound = $("#"+value+"")[0].innerText;
        // si le texte vaut 15 , donc c'est la case vide!
        if (valueFound === '15') {
            idtuileBlank = value;
            isBlank = true;
        }
    });

    // si la case est vide , on procède au swap 
    if (isBlank) {
        $("#"+idTarget+"").find('p').text(15);
        $("#"+idTarget+"").css('background-image', `none`);
        $("#"+idtuileBlank+"").find('p').text(numberTarget);
        $("#"+idtuileBlank+"").css('background-image', `url(\"img/${"0"+numberTarget}.jpg\")`);
    }
}

function puzzle_solved()
{
  solution = []; 
  for (var i = 0 ; i<16  ; i++)
  {
    check_tuile = $("#"+i+"")[0].innerText;
    check_tuile = parseInt(check_tuile); 
    solution.push(check_tuile);
  }
  var results = true;
  for(var j = 0 ; j<16 ; j++)
  {
    if (solution[j] != img_ord[j])
      results = false ; 
  }

  if (results == true)
  alert("vous avez gagner"); 
  ("#output").text("Vous avez gagner")
 // $("#puzzlearea").off("click");
	
}



$(document).ready(function() {
  init(img_ord); 
  
});

// ok! 
$("#puzzlearea").click(function(event) {
  var idTarget = event.target.id;
  var numberTarget = event.target.innerText;
  var style = event.target.style['background-image'];
    // on verifie l'image de la tuile! 
  if(style != '') {
    check_and_swap(idTarget, numberTarget);
  } 
  puzzle_solved(); 

});

$( "#shuffle" ).click(function() {
      //console.log("you clicked on me");  
      var arrayRandomized = arr_sr(img_ord);
      for(var i = 0; i < 16; i++){
        var valueTmp = arrayRandomized[i]

        if (valueTmp === 15) {
          $("#"+i+"").css('background-image', `none`);
        } else {
          $("#"+i+"").css('background-image', `url(\"img/${"0"+valueTmp}.jpg\")`);
        }

        $("#"+i+"").find('p').text(valueTmp);
      }
     // puzzle_solved(); 
});


