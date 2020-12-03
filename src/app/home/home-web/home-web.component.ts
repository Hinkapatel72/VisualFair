import { Component, OnInit } from '@angular/core';
import * as content from '../../../assets/resources/content.json'
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-web',
  templateUrl: './home-web.component.html',
  styleUrls: ['./home-web.component.css']
})
export class HomeWebComponent implements OnInit {


  config: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    }
  }

  content: any


  constructor() { }

  ngOnInit(): void {

    this.content = (content as any).default;
    console.log(this.content);
  }

}
