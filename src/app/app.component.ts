import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  input: string[] = [
    '12:01:00PM',
    '12:01:00AM',
    '07:05:45PM',
  ];
  
  ngOnInit(): void {
    this.input.forEach(i => {
      this.timeConversion(i);
    })
  }
  
  // Versión original
  timeConversion(s: string): string {
    let copy: string = s.slice(0, 8);
    let hour = copy.slice(0, 2);
    let minSec = copy.slice(2);

    if (s.includes('AM')) {
      if (hour === '12') {
        copy = '00' + minSec;
      }
    } else if (s.includes('PM')) {
      if (hour !== '12') {
        let parsedhour = parseInt(hour, 10) + 12;
        copy = parsedhour + minSec
      }
    }
    return copy
  }

  // Versión mejorada con AI
  timeConversion2(s: string): string {
    const isPM = s.includes('PM');
    let hour = parseInt(s.slice(0, 2), 10);
    const minutesAndSeconds = s.slice(2, 8);

    if (isPM && hour !== 12) {
      hour += 12;
    } else if (!isPM && hour === 12) {
      hour = 0;
    }

    return `${hour.toString().padStart(2, '0')}${minutesAndSeconds}`;
  }

  // DESGLOSE
  timeConversion3(s: string): string {
    const isPM = s.includes('PM');
    let hour = parseInt(s.slice(0, 2), 10);
    const minutesAndSeconds = s.slice(2, 8);

    if (isPM && hour !== 12) {
      hour += 12;
    } else if (!isPM && hour === 12) {
      hour = 0;
    }

    return `${hour.toString().padStart(2, '0')}${minutesAndSeconds}`;
    // .padStart rellena a la izquierda con espacios o el caracter especificado hasta que se alcance la longitud indicada
    // si es '12' de PM quedará en 12 y ya no agregará nada ya que ya se había alcanzado la longitud
    // si es '12' de AM quedará en 0, así que .padStart agregará otro 0 y así alcanzará la longitud
    // si es '07' de PM quedará en 19 y ya no agregará nada ya que ya se había alcanzado la longitud
  }

  // Solución de IA aplicada
  
  
}
