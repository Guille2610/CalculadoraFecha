import{Component, NO_ERRORS_SCHEMA} from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  schemas: [NO_ERRORS_SCHEMA],
})

export class CalculadoraComponent{
    fechaInicio : Date = new Date();
    fechaFin: Date = new Date();
    resultado: String = '';

    onFechaInicioChange(event: any): void {
        this.fechaInicio = event.value;
    }
    onFechaFinChange(event: any): void {
        this.fechaFin = event.value;
    }   
    calcularFecha(): void{
        if(this.fechaInicio && this.fechaFin){
            const diffTime = Math.abs(this.fechaFin.getTime() - this.fechaInicio.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            this.resultado = `La diferencia entre las fechas es de ${diffDays} días.`;
        }
    }
}