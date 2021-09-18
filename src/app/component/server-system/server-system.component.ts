import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-server-system',
  templateUrl: './server-system.component.html',
  styleUrls: ['./server-system.component.scss']
})
export class ServerSystemComponent implements OnInit {

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
