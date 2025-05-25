import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  matrix: number[][] = [
    [1, 2, 3, 4, 5],
    [7, 69, 2, 221, 8974]
  ]
  
  ngOnInit(): void {
    this.matrix.forEach(i => {
      this.miniMaxSum4(i)
    })
  }

  // Versión original
  miniMaxSum(arr: number[]): void {
    arr.sort((a, b) => a - b)
    let minMax: number[] = [0, 0]

    for (let i = 0; i < 4; i++) {
      minMax[0] += arr[i]
      minMax[1] += arr[(arr.length - i) - 1]
    }

    console.log(`${minMax[0]} ${minMax[1]}`)
  }

  // Versión mejorada con AI
  miniMaxSum2(arr: number[]): void {
    arr.sort((a, b) => a - b);

    const min = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);
    const max = arr.slice(-4).reduce((acc, num) => acc + num, 0);

    console.log(`${min} ${max}`);
  }

  // DESGLOSE
  miniMaxSum3(arr: number[]): void {
    arr.sort((a, b) => a - b);

    const min = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);
      // .slice(0, 4) extrae un nuevo array desde que va desde la posicion 0 del array hasta la posición 3, el número 4 indica la posición a partir de la cual ya no se va a extraer
      // si se usa solo un parametro positivo como .slice(3) extrae desde la posición 3 (arr[3]) hasta el final
    const max = arr.slice(-4).reduce((acc, num) => acc + num, 0);
      // .slice(-4) si es negativo, extrae los últimos elementos indicados por el número, en este caso los últimos 4 del array

    console.log(`${min} ${max}`);

    // EXPLICACIÓN
    // slice(start, end): Copia los elementos desde start hasta end (sin incluir end).
    // Si solo se usa start, extrae desde ese índice hasta el final.
    // Si start es negativo, cuenta desde el final del array.
  }

  // Solución de IA aplicada
  miniMaxSum4(arr: number[]): void {
    arr.sort((a, b) => a - b)

    const min = arr.slice(0, 4).reduce((acc, n) => acc + n, 0)
    const max = arr.slice(-4).reduce((acc, n) => acc + n, 0)

    console.log(`${min} ${max}`)
  }
  
}
