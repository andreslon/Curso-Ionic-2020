export interface RestaurantModel{
    id?: string;
    nombre: string;
    imagen: string;
    direccion: string;
    telefono: string;
    sitioWeb: string;
    latitud: number;
    longitud: number;
    productos?: any;
    calificacion: number; 
}