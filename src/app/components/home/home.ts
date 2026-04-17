import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  selectedDivida = 'pagas';

  onDividaChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target?.value ?? this.selectedDivida;
    this.selectedDivida = value;
    console.log('Dash aberto:', value);
  }
}
