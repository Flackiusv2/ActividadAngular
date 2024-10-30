export class Coevaluacion {
    comentario: string;
    fecha: Date;
    calificacion: number;

    public constructor(comentario: string, fecha: Date, calificacion: number) {
        this.comentario = comentario;
        this.fecha = fecha;
        this.calificacion = calificacion;
    }
}
