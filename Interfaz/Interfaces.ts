
// Definición de las interfaces

interface ITipoGasolina {
    id: number;
    nombre: string;
}

interface IDispensador {
    id: number;
    nombre: string;
}

interface IConsumo {
    id: number;
    cantidad: number;
    tipoGasolina: ITipoGasolina;
    dispensador: IDispensador;
}

// Creación de un arreglo de objetos de tipo Consumo

const consumos: IConsumo[] = [
    {
        id: 1,
        cantidad: 10,
        tipoGasolina: gasolinaRegular,
        dispensador: dispensador1
    },
    {
        id: 2,
        cantidad: 15,
        tipoGasolina: gasolinaPremium,
        dispensador: dispensador1
    },
    {
        id: 3,
        cantidad: 8,
        tipoGasolina: gasolinaRegular,
        dispensador: dispensador2
    }
];

// Mostrar los objetos en el arreglo

console.log(consumos);

function eliminarElementoPorId(arr: IConsumo[], id: number): IConsumo[] {
    const index = arr.findIndex(elemento => elemento.id === id);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}