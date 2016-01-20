
/* OBJETS QUESTION / REPONSE */

function Question(intitule, reponse) {
	this.intitule = intitule;
	this.reponse = reponse;
}

function Reponse(intitule, resultat) {
	this.intitule = intitule;
	this.resultat = resultat;
}

/* RECUPERATION DES DONNEES */

var intituleQ = document.getElementById("inputQuestion").value;
var intituleR = document.getElementById("inputRep").value;
var validite = document.getElementById('validite').checked;

/* INSTANCIATION DES OBJETS */

var reponse1 = new Reponse(intituleR, validite);
//var reponse2 = new Reponse("reponse2", false, "1");
var question1 = new Question(intituleQ, reponse1);

sessionStorage.setItem("question",intituleQ);
var question = sessionStorage.getItem(question);
console.log(sessionStorage.couleur);


/* VALIDATION DU FORMULAIRE */

document.getElementById("bouton").addEventListener("click", function(){
 		alert(question1.intitule);
});

/* VUES */

new Vue({
  el: '#question',
  data:{
  	  question: question1.intitule
  	}
})

new Vue({
  	el: '#reponse',
  	data:{
  	  reponse: question1.reponse.intitule
  	}
})