import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-custom-software',
  templateUrl: './custom-software.component.html',
  styleUrls: ['./custom-software.component.scss']
})
export class CustomSoftwareComponent implements OnInit {

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
