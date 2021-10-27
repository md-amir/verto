import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  handleNavLinkClick(event: Event) {
    var linkColor = this.document.querySelectorAll('.nav_link') as NodeList;
    if (linkColor) {
      linkColor.forEach(l => {
        var a = l as HTMLElement
        a.classList.remove('nav-active')
      })
      // this.classList.add('active')
    }
    (event.currentTarget as HTMLElement).classList.toggle('nav-active');
  }

}
