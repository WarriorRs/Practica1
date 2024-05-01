// Definición de la entidad Consumo

const Consumo = (id:number, cantidad:number, tipoGasolina:string, dispensador:string) => ({ 
    id,
    cantidad,
    tipoGasolina,
    dispensador
});

// Creación de instancias de las entidades

const consumo1 = Consumo(1, 10, "gasolinaRegular", "dispensador1");
const consumo2 = Consumo(2, 15, "gasolinaPremium", "dispensador1");
const consumo3 = Consumo(3, 8, "gasolinaRegular", "dispensador2");

//muestra
console.log(consumo1);
console.log(consumo2);
console.log(consumo3);
