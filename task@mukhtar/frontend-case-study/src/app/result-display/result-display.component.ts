import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent {
  @Input() document: string = '';
  @Input() state: string = '';

  getDate(): string {
    return new Date().toLocaleDateString();
  }
}
