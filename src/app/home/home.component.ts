import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Importa Router
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  password: number[] = []; // Guarda los números ingresados
  correctPassword = [3, 0, 1, 2, 1, 6]; // Contraseña correcta
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // Botones numéricos

  constructor(private router: Router) {} // ✅ Inyecta Router en el constructor

  addDigit(num: number) {
    if (this.password.length < 6) {
      this.password.push(num);
    }
  }

  validatePassword() {
    if (JSON.stringify(this.password) === JSON.stringify(this.correctPassword)) {
      Swal.fire({
        title: '¡Correcto! 💖',
        text: 'Has ingresado la contraseña correcta. ¡Buenísimooooooo!',
        icon: 'success',
        confirmButtonText: '💘 Vamos allá 💘',
        background: '#ffe6f2', // Color pastel rosa
        color: '#ff3366', // Color de texto fucsia suave
        confirmButtonColor: '#ff6699', // Botón rosa medio
        backdrop: `
          rgba(255, 182, 193, 0.5)
          url("/assets/corazones.gif")
          left top
          no-repeat
        `
      }).then(() => {
        this.router.navigate(['/second']); // ✅ Redirige al siguiente componente
      });

    } else {
      Swal.fire({
        title: '¡Que peeeeeena! ❌',
        text: 'La contraseña es incorrecta. Intenta de nuevo.',
        icon: 'error',
        confirmButtonText: '💔 Volver a intentar 💔',
        background: '#ffe6f2',
        color: '#ff3366',
        confirmButtonColor: '#ff99aa',
        backdrop: `
          rgba(255, 182, 193, 0.5)
          url("/assets/triste.gif")
          left top
          no-repeat
        `
      });

      this.password = []; // Reinicia la contraseña ingresada
    }
  }

  clearPassword() {
    this.password = []; // Borra los números ingresados
  }

  formattedPassword(): string {
    // Convierte el array en una cadena con formato "XX - XX - XX"
    let str = this.password.join('');
    return str.replace(/(\d{2})(?=\d)/g, '$1 - ');
  }
}
