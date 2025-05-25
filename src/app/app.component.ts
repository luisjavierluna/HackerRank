import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  matrix: number[][] = [
    [-4, 3, -9, 0, 4, 1],
    // [1, 2, 3, -1, -2, -3, 0, 0],
  ]
  
  ngOnInit(): void {
    this.matrix.forEach(i => {
      this.plusMinus4(i)
    })
  }

  // Versión original
  plusMinus(arr: number[]): void {
    let sums: number[] = [0, 0, 0];
    let output: number[] = [];
    
    arr.forEach(i => {
      if(i > 0) {
          sums[0]++
      } else if (i === 0) {
          sums[2]++
      } else {
          sums[1]++
      }
    })
    
    for(let i = 0; i < sums.length; i++) {
        output.push(sums[i] / arr.length)
    }
    
    output.forEach(i => {
        console.log(i.toFixed(6))
    })
  }

  // Versión mejorada con AI
  plusMinusIA(arr: number[]): void { 
    let sums = arr.reduce((acc, i) => {
        i > 0 ? acc[0]++ : i === 0 ? acc[2]++ : acc[1]++;
        return acc;
    }, [0, 0, 0]);

    sums.map(s => console.log((s / arr.length).toFixed(6)));
  }

  // DESGLOSE
  // Paso 1: usar map, itera el array original y aplica una función en cada 
  // elemento sin modificar el array original, genera un nuevo array
  // este puede ser asignado a otroa variable o no
  plusMinus2(arr: number[]): void {
    let sums: number[] = [0, 0, 0];
    
    arr.forEach(i => {
      if(i > 0) {
          sums[0]++
      } else if (i === 0) {
          sums[2]++
      } else {
          sums[1]++
      }
    })
    
    sums.map(s => console.log((s / arr.length).toFixed(6)))
  }

  // Paso 2: user .reduce con estructura ternaria
  plusMinus3(arr: number[]): void {
    let sums = arr.reduce((acc, i) => {
      i > 0 ? acc[0]++ : i === 0 ? acc[2]++ : acc[1]++; // INTERESANTE, estructura ternaria como un condicional ternario
      return acc;
      }, [0, 0, 0]);

    // como funciona .reduce = array.reduce((acumulador, elementoActual) => { lógica }, valorInicialDelAcumulador);
      // acumulador = acc
      // elementoActual = i
      // valorInicialDelAcumulador = [0, 0, 0]
      // logica = {i > 0 ? acc[0]++ : i === 0 ? acc[2]++ : acc[1]++; return acc; }
    
    sums.map(s => console.log((s / arr.length).toFixed(6)))
  }

  // Solución de IA aplicada
  plusMinus4(arr: number[]): void {
    let sums = arr.reduce((acc, i) => {
      i > 0 ? acc[0]++ : i === 0 ? acc[2]++ : acc[1]++;      
      return acc
      }, [0, 0, 0])

    sums.map(s => console.log((s / arr.length).toFixed(6)));
  }
  
}
