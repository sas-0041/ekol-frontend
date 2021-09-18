import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-meatsys',
  templateUrl: './meatsys.component.html',
  styleUrls: ['./meatsys.component.scss']
})
export class MeatsysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function(scroll:any) {
      scroll = $(window).scrollTop();
     $("#js-hero img").css({
       width: (100 + scroll/5) + "%"
     })
   })
   
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
