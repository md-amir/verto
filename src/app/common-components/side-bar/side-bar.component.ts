import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  verto: HTMLElement | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  handleNavLinkClick(event: Event) {
    var linkColor = this.document.querySelectorAll('.sidebar_link') as NodeList;
    if (linkColor) {
      linkColor.forEach(l => {
        var a = l as HTMLElement
        a.classList.remove('nav-active')
      })
    }
    (event.currentTarget as HTMLElement).classList.toggle('nav-active');
  }

  handlelHeaderToggle(event: Event): void {
    (event.currentTarget as HTMLElement).classList.toggle('bx-x');
    this.verto = document.getElementById('verto-body') as HTMLElement;
    this.verto.classList.toggle('verto-body');
    this.verto.classList.toggle('verto-body-narrow');
  }

}
