import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  value: string = '';
  search() {
    let url = 'https://www.google.com/search?q=';
    window.open(url + this.value, '_blank', 'noopener');
  }
  onKey(event: KeyboardEvent) {
    this.value = (<HTMLInputElement>event.target).value;
  }
  constructor() {}

  ngOnInit(): void {}
}
