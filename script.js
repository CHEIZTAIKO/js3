class instrumento{
    constructor(tipo, color,cuerdas){
        this.tipo=tipo;
        this.color=color;
        this.cuerdas=cuerdas
        this.info = `${this.tipo} de color ${this.color} y con ${this.cuerdas} cuerdas.`
    }
}

let guitarra = new instrumento("guitarra","negra",7);
let guitarra2 = new instrumento("guitarra","azul",6)
let bajo = new instrumento("bajo","blanco", 5);
let bajo2 = new instrumento("bajo","rojo",6)

let array = [guitarra.info,guitarra2.info,bajo.info,bajo2.info];
console.log(array);

let opcion;
while(opcion != 0){
    opcion = parseInt(prompt("buen dia usted gano un instrumento gratis.\n1-guitarra negra de 7 cuerdas\n2-guitarra azul de 6 cuerdas\n3-bajo blanco de 5 cuerdas \n4-bajo rojo de 6 cuerdas.\n elija las opciones con su numero correspondiente,gracias.").toLowerCase());
    if(opcion == 1){
        array.splice(1,3)
    break
    }else if(opcion == 2){
        array.splice(2,3);
        array.shift();
    break
    }else if(opcion == 3){
        array.pop()
        array.splice(0,2)
    break
    }else if(opcion == 4){
        array.splice(0,3)
    break
    }else{
        alert("ingrese una opcion valida por favor");
    }
}

alert(array);

