import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-selector',
  standalone: true,
  templateUrl: './dropdown-selector.component.html',
  styleUrls: ['./dropdown-selector.component.css']
})
export class DropdownSelectorComponent {
  @Output() documentSelected = new EventEmitter<string>();
  @Output() stateSelected = new EventEmitter<string>();

  selectDocument(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.documentSelected.emit(value);
  }

  selectState(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.stateSelected.emit(value);
  }
}
