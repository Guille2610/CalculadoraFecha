import{Component, NO_ERRORS_SCHEMA} from '@angular/core';
import { NativeScriptFormsModule, NativeScriptCommonModule } from '@nativescript/angular';
import { DropDownModule } from 'nativescript-drop-down/angular';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    DropDownModule,
    NativeScriptFormsModule,
    NativeScriptCommonModule
  ]
})

export class CalculadoraComponent{
    fechaInicio : Date = new Date();
    fechaFin: Date = new Date();
    resultado: String = '';
    opciones = ['Sólo días', 'Años, Meses, Días'];
    selectedIndex = 0;


    onFechaInicioChange(event: any): void {
        this.fechaInicio = event.value;
    }
    onFechaFinChange(event: any): void {
        this.fechaFin = event.value;
    }   

    onDropDownchange(event: any) {
        this.selectedIndex = event.newIndex;
    }


    calcularFechaDias(): void{
        if(this.fechaInicio && this.fechaFin){
            const diffTime = Math.abs(this.fechaFin.getTime() - this.fechaInicio.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            this.resultado = `${diffDays} días`;
        }
    }

    calcularFechaAMD() {
    const inicio = new Date(this.fechaInicio);
    const fin = new Date(this.fechaFin);

    let años = fin.getFullYear() - inicio.getFullYear();
    let meses = fin.getMonth() - inicio.getMonth();
    let dias = fin.getDate() - inicio.getDate();


    // Ajuste si los días son negativos
    if (dias < 0) {
        meses--; // Resta un mes
        // Obtiene los días del mes anterior
        const mesAnterior = new Date(fin.getFullYear(), fin.getMonth(), 0);
        dias += mesAnterior.getDate();
    }

    // Ajuste si los meses son negativos
    if (meses < 0) {
        años--;
        meses += 12;
    }

    this.resultado = `${años} años, ${meses} meses, ${dias} días`;
}

    calcular(): void {
        switch (this.selectedIndex) {
            case 0:
                this.calcularFechaDias();
                break;
            case 1:
                this.calcularFechaAMD();
                break;
        }
    }


}