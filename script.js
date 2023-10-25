
const listaSpesa = [ "marmellata", "pane", "burro", "caffè"];

let i = 0;
let text = "";

while (listaSpesa[i]){
    text += listaSpesa[i] + "<br>";
    i++;
}

//brutalmente me ne scuso stampo sulla pagina la lista di ogni item singolarmente
// document.getElementById("demo").innerHTML = text;
document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(text);
  });

  function myFunction(text) {
    document.getElementById("demo").innerHTML = text;
  }