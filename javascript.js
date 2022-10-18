class Genetica{
    constructor(id,nombre,floracion,porcentajeSativa,porcentajeIndica,alturaIndor,alturaExterior,THC,CBD,stock,precio){
        this.id = id;
        this.nombre = nombre;
        this.floracion = floracion;
        this.porcentajeSativa = porcentajeSativa;
        this.porcentajeIndica = porcentajeIndica;
        this.alturaIndor = alturaIndor;
        this.alturaExterior = alturaExterior;
        this.THC = THC;
        this.CBD = CBD;
        this.stock = stock;
        this.precio = precio;



    }
}
const geneticas = [];

geneticas.push(new Genetica(0,"ogkush","65 dias","70%","30%","1,73m","4,00m","30%","0.5%",10,2500));
geneticas.push(new Genetica(1,"lemonhaze","73 dias","20%","80%","1,72m","3,75m","44%","0.5%",2,3000));
geneticas.push(new Genetica(2,"purplekush","45 dias","35%","65%","1,71m","3,80m","22%","0.2%",3,3500));
geneticas.push(new Genetica(3,"superskunk","60 dias","100","0%","1,70m","4,05m","15%","0.2%",25,4000));
geneticas.push(new Genetica(4,"mobydick","65 dias","50%","50%","1,76m","3,95m","35%","0.3%",5,4500));
geneticas.push(new Genetica(5,"gelato44","80 dias","70%","30%","1,75m","3,65m","24%","0.1%",0,5000));


function elegirGenetica() {
    let comprarGenetica = prompt("Ingrese el nombre de la genetica que desea comprar.                           (Solo puede pedir una  genetica por compra)"); // no pude resolver para que me de el total del precio en la suma de 2 array entonces tuve que hacer que sea una genetica por compra por no poder el total de 2 array
    const buscado = geneticas.find((el) => el.nombre === comprarGenetica);
    stock = buscado.stock;
    if (comprarGenetica = buscado) {
        console.log(buscado.nombre);
        console.log("Dias de floracion: " + buscado.floracion);
        console.log("El pocentaje de sativa es de: " + buscado.porcentajeSativa);  //Trate de hacer un function que me imprima todos los console.log y solo le pasaba la function detalles(); pero me da error al ejecutar
        console.log("El pocentaje de indica es de: " + buscado.porcentajeIndica);  //
        console.log("Altura indor: " + buscado.alturaIndor);
        console.log( "Altura exterior: " + buscado.alturaExterior);
        console.log("Porcensatje de THC: " + buscado.THC);
        console.log("Porcentaje de CBD" + buscado.CBD);
        // detalles();
        precio = buscado.precio;
        console.log("El precio de cada semilla es de $" + buscado.precio);
        // let semillas = prompt("¿Cuantas semillas desea comprar? (DISPONIBLE: " + buscado.stock+ ")");
        if ( stock >= 1) {
            let semillas = prompt("¿Cuantas semillas desea comprar? (DISPONIBLE: " + buscado.stock+ ")");
            precio = semillas * buscado.precio;
            console.log("El total de su compra es $" + precio);

            if (precio > 0) {
                let decision = prompt("¿Desea realizar una nueva compra")
                if (decision === "si" || decision === "Si" || decision === "SI") {
                    precio = precio + buscado.precio;
                    elegirGenetica();
                }else{
                    console.log("Te esperamos nuevamente...")
                    console.log("El total de su compra fue $" + precio);
                    // const total  = geneticas.reduce((acumulador,genetica)=> {
                    // return acumulador + buscado.precio;
                    //  }, 0);
                    //  console.log(total);

                }
                
                
            }
        }else{
            alert("Lo sentimos no nos queda stock de semillas de " + buscado.nombre);
            elegirGenetica();
        }

        
    } else{
        console.log("No se encontro genetica");
    }
    
}


let precio = 0;
while (precio === 0) {
    elegirGenetica();
    
    
}




// // // function elegirGenetica() {
// // //     let comprarGenetica = prompt("Ingrese el nombre de la genetica que desea comprar");
// // //     const buscado = geneticas.find((el) => el.nombre === comprarGenetica);
// // //     stock = buscado.stock;
// // //     if (comprarGenetica = buscado) {
// // //         console.log(buscado);
// // //         precio = buscado.precio;
// // //         console.log("El precio de cada semilla es de $" + buscado.precio);
// // //         let semillas = prompt("¿Cuantas semillas desea comprar? (DISPONIBLE: " + buscado.stock+ ")");
// // //         if ( stock >= 1) {
// // //             precio = semillas * buscado.precio;
// // //             if (precio > 0) {
// // //                 let decision = prompt("¿Desea seguir comprando??")
// // //                 if (decision === "si" || decision === "Si" || decision === "SI") {
// // //                     precio = precio + buscado.precio;
// // //                     elegirGenetica();
// // //                 }else{
// // //                     console.log("adios")
// // //                     console.log("El total de su compra es $" + precio);
// // //                     // const total  = geneticas.reduce((acumulador,genetica)=> {
// // //                     // return acumulador + buscado.precio;
// // //                     //  }, 0);
// // //                     //  console.log(total);

// // //                 }
                
                
// // //             }
// // //         }else{
// // //             console.log("Lo sentimos no nos queda stock de semillas de " + buscado.nombre);
// // //             elegirGenetica();
// // //         }

        
// // //     } else{
// // //         console.log("No se encontro genetica");
// // //     }

// // // }



// function otraGeneticas() {
//     let comprarGenetica = prompt("Ingrese el nombre de la genetica que desea comprar");
//     const buscado = geneticas.find((el) => el.nombre === comprarGenetica);
//     stock = buscado.stock;
//     // // precio = buscado.precio;
//     if (comprarGenetica = buscado) {
//         console.log(buscado);
//         // precio++;
//         let semillas = prompt("¿Cuantas semillas desea comprar?");
//         if (semillas >= 1 && stock >= 1) {
//             console.log("El precio de la semilla es " + buscado.stock);
//         }

        
//     } else{
//         console.log("No se encontro genetica");
//     }

// }
// function stock() {
    //     if (stock >= 1) {
        //         console.log("El precio de sus semillas es: $" + precio);
//         console.log("1");
//     }else{
//         console.log("No nos queda stock :c ");
//         console.log("2");

//     }
// }
// geneticas.forEach(())


// const buscado = geneticas.find((el) => el.nombre === comprarGenetica)
// console.log(buscado);
// while (precio === 0 || stock <1 ) {
//     let comprarGenetica = prompt("Ingrese el nombre de la genetica que desea comprar");

// }

// console.log(geneticas.nombre);
// let stock = 0;
// let precio = 0;
// function stockear() {
//     if (stock < 1) {

//         alert("Lo sentimos no nos queda stock de " + genetica);
//         //
        
//     } else{
//         // precio = 0;
//         alert("El precio de sus semillas es: $" + precio);
//     }
// }
// while (precio === 0 || stock <1 ) {
//     let genetica = prompt("Ingrese el nombre de la genetica que desea comprar");
//     switch (genetica) {
//         case "ogkush":
//         case "og kush":
//         case "Og Kush":
//         case "OgKush":
//             stock = 2;
//             precio = 2000;
//             stockear();
          

//             break;

//         case "lemonhaze":
//         case "lemon haze":
//         case "Lemon Haze":
//         case "LemonHaze":
//             stock = 1;
//             precio = 2500;

            
           
//             stockear();

    
            
//             break;
//         case "purplekush":
//         case "purple kush":
//         case "Purple Kush":
//         case "PurpleKush":
//             stock = 0;
//                         // Cuando solicitaba la genetica que no habia stock la funcion no me generaba el "alert("Lo sentimos no nos queda stock de " + genetica);"
//                         //En el resto la funcion stokear da lo esperado pero cuando fuerzo la funcion para ejecutar la primera condicion  no funciona
//                         //Tampoco puede resolverlo.
//                        if (stock < 1) {
//                             alert("Lo sentimos no nos queda stock de " + genetica);
                    
//                         } else{
//                            precio = 4500;
//                             alert("El precio de sus semillas es: $" + precio);
//                         }

                    
            

    
//             break;
//         case "superskunk":
//         case "supers kunk":
//         case "Super Skunk":
//         case "SuperSkunk":
//             stock = 4;
//             precio = 2500;

            
//             stockear();
          
    
            
//             break;
//         case "mobydick":
//         case "moby dick":
//             case "Moby Dick":
//         case "MobyDick":
//             stock = 7;
//             precio = 3000;

        
//             stockear();
    
    
            
//             break;
//         case "gelato44":
//         case "Gelato44":
//             stock = 3;
//             precio = 5000;

            
    
//             stockear();
    
    
            
//             break;
    
//         default:
//             alert("Ingrese una Genetica Disponible")
//             break;
//     }
// }

// // // alert("El precio de sus semillas es: $" + precio);
