import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  header: HTMLElement | undefined;
  verto: HTMLElement | undefined;
  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit(): void {

  }

  handlelHeaderToggle(event: Event): void {
    (event.currentTarget as HTMLElement).classList.toggle('bx-x');
    this.header = document.getElementById('header') as HTMLElement;
    this.verto = document.getElementById('verto-body') as HTMLElement;

    this.verto.classList.toggle('verto-body');
    this.verto.classList.toggle('verto-body-narrow');
  }
}
