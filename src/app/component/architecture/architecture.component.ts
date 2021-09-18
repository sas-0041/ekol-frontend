import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var btn = $('#button');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e:any) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });
  }

}
