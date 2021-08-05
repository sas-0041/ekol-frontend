import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-referans',
  templateUrl: './referans.component.html',
  styleUrls: ['./referans.component.scss']
})
export class ReferansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var $owl = $('.owl-carousel');

    $owl.children().each( function( index:any ) {
      $().attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    
    $owl.owlCarousel({
      center: true,
      loop: true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2000,
      responsiveClass:true,
      autoplayHoverPause:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:5
        }

      }
    });

    
    
    $(document).on('click', '.owl-item>div', function() {
      // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
      var $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$().data( 'position' ), $speed] );
    });
}
}