var Tab=[];

// creation du champs textar
var text = document.createElement('input');
document.body.appendChild(text);
text.id='text';

// creation du boouton appelant le champs text
var push = document.createElement('button');
document.body.appendChild(push);
push.innerHTML ="push";

var pop = document.createElement('button');
document.body.appendChild(pop);
pop.innerHTML ="pop";

var shift = document.createElement('button');
document.body.appendChild(shift);
shift.innerHTML="shift";

var random = document.createElement('button');
document.body.appendChild(random);
random.innerHTML='random';

var full = document.createElement('button');
document.body.appendChild(full);
full.innerHTML='full';

var resultat = document.createElement('div');
document.body.appendChild(resultat);
resultat.id = "resultat";

var resultat2 = document.createElement('div');
document.body.appendChild(resultat2);
resultat.id = "resultat2";

for(var i=0;i<Tab.length;i++){

    if(Tab.length <10){

        document.getElementById('resultat').innerHTML="veuillez entrer  10 valeur";
        document.getElementById('rsultat2').innerHTML= " la valeur de l'index 5 est : "+Tab.indexOf(5);
    }
    else{
        resultat = Math.random(Tab[i]);
        document.getElementById('resultat').innerHTML=resultat;
    }




}


push.addEventListener("click", function () {
    var user=document.getElementById('text').value;
    Tab.push(user);
    console.log( "Tab : "+Tab);
});

pop.addEventListener("click", function () {
    Tab.pop();
    console.log("Tab : "+Tab);
});

shift.addEventListener("click", function () {

    Tab.shift();
    console.log("Tab : "+Tab);

});

