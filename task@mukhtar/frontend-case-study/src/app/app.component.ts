import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSelectorComponent } from './dropdown-selector/dropdown-selector.component';
import { ResultDisplayComponent } from './result-display/result-display.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DropdownSelectorComponent, ResultDisplayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDocument: string = '';
  selectedState: string = '';
  showResult: boolean = false;

  onDocumentSelected(doc: string) {
    this.selectedDocument = doc;
  }

  onStateSelected(state: string) {
    this.selectedState = state;
  }

  showDocument() {
    this.showResult = true;
  }
}
