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
    this.deneme();
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

  private deneme() {
    var $owl = $('.owl-carousel');

    $owl.children().each( function( index:any ) {
      $().attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    
    $owl.owlCarousel({
      center: true,
      loop: true,
      margin:10,
      autoplay:true,
      autoplayTimeout:4000,
      responsiveClass:true,
      autoplayHoverPause:true,
      items:1
    });

    
    
    $(document).on('click', '.owl-item>div', function() {
      // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
      var $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$().data( 'position' ), $speed] );
    });

    
}


}
