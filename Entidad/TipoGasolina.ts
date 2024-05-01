
//Creacion entidad TipoGasolina

const TipoGasolina = (id:number, nombre:string) => ({ id, nombre });

//Instancia de la entidad

const gasolinaRegular = TipoGasolina(1, "Regular");
const gasolinaPremium = TipoGasolina(2, "Premium");