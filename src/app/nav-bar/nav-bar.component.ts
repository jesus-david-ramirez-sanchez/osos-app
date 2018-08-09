import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function scrollToDownload() {

      if ($('.section-download').length !== 0) {
        $('html, body').animate({
          scrollTop: $('.section-download').offset().top
        }, 1000);
      }
    }
  }

}
