alert('Bienvenido! Empiece a crear su ensalada!')
const ingrediente1= prompt('Primero, ingrese un ingrediente','tomate');
const ingrediente2= prompt('Muy bien! Ahora ingrese el segundo ingrediente','lechuga');
const ingrediente3= prompt('Solo nos falta el tercer ingrediente','zanahoria');

if(ingrediente1 == Null || ingrediente2 == Null || ingrediente3 == Null){
alert('que pasó?! Debian ser tres ingredientes :(')
}else{
document.write(`
<h2>Su ensalada lleva los siguientes ingredientes:</h2>
<ul class="listaIngredientes">
<li>${ingrediente1}</li>
<li>${ingrediente2}</li>
<li>${ingrediente3}</li>
</ul>`)}
