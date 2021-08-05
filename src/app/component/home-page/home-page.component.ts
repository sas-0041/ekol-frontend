import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

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

  deneme() {
    $('.slider').slick({
      speed: 300,
      slidesToShow: 1,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      arrows: true,
      fade: true,

    });
    
  }
}
