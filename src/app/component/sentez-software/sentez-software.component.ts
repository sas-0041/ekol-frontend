import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-sentez-software',
  templateUrl: './sentez-software.component.html',
  styleUrls: ['./sentez-software.component.scss']
})
export class SentezSoftwareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".acordeon").on("click", ".acordeon-cabecera", function(this:any) {
      $(this).toggleClass("active").next().slideToggle();
    });

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
