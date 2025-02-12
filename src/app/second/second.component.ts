import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  rejectionMessages: string[] = [
    "¿Cómo que no? 🤨, te pasas JAJAJA",
    "¿Otra vez no? 😩, tranquila te daré otra oportunidad, piénsalo bien por favor 😂",
    "Puchaaaa, esto ya me está preocupando 🥲.",
    "Oh ñoooooooooo:(",
    "¿De verdad aún no?🥺, ya está bien, prometo no usar 5 colores en mi outfit.",
    "Vamoooooos, di que sí, mira que te quiero dar mucho amor 😭.",
    "Veeeees como sigues, por eso lo programé para que no salgas de esta pantalla hasta que digas que sí 🤭, Buenísimo JAJAJA."
  ];

  rejectionMessage: string = "";
  rejectIndex: number = 0;
  memeImage: string = ""; // Variable para guardar la imagen del meme

  constructor(private router: Router) {}

  accept() {
    this.router.navigate(['/final']); // Redirige a otra vista con el mensaje especial
  }

  reject() {
    if (this.rejectIndex >= this.rejectionMessages.length) {
      this.rejectIndex = 0; // Reinicia el ciclo si llega al final
    }

    this.rejectionMessage = this.rejectionMessages[this.rejectIndex];

    // Asigna la imagen dependiendo del índice
    if (this.rejectIndex === 2) {
      this.memeImage = "assets/meme_1.png";
    } else if (this.rejectIndex === 3) {
      this.memeImage = "assets/meme_2.png";
    }else if (this.rejectIndex === 4) {
      this.memeImage = "assets/meme_3.png";
    } else {
      this.memeImage = ""; // Si no es ninguno de los índices, no se muestra imagen
    }

    this.rejectIndex++;
  }
}
