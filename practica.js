var nombre = prompt("Bienvenido/a al cuestionario sobre las Olimpíadas.¿Cual es tu nombre? ");

alert("Bienvedido " + nombre + " vamos hacer unas preguntas sobre las olimpiadas");

var res1 = prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas?\nA. Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre");

if(res1 == "B"){
    res1 = 1;
}else if(res1 == "A"){
    res1 = 0;
}
else if(res1 == "C"){    
    res1 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var res2 = prompt("2-¿De qué color es la prompoción de 2do de secundaria?\nA. Celeste o Turquesa \nB. Rojo\nC. Morado");

if(res2 == "A"){
    res2 = 1;
}else if(res2 == "B"){
    res2 = 0;
}
else if(res2 == "C"){    
    res2 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var res3 = prompt("3. Nuevo deporte incluido este año\nA. Futsal femenino\nB. Balonmano\nC. Marcha atlética");

if(res3 == "C"){
    res3 = 1;
}else if(res3 == "B"){
    res3 = 0;
}
else if(res3 == "A"){    
    res3 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var total = res1 + res2 + res3;

if (total <= 2){
    document.write("Vuelve a intentarlo " + nombre);
}

if (total => 2){
    document.write("Lo has hecho bien " + nombre);
}else{
    document.write("Puedes hacerlo mejor " + nombre);
}