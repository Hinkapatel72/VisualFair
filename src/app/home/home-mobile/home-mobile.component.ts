import { Component, OnInit } from '@angular/core';
import * as content from '../../../assets/resources/content.json'
import { SwiperOptions } from 'swiper';
import * as _ from 'lodash';
import { ThemeService } from '../../services/theme.service';
import { ShareSheetComponent } from '../../common/share-sheet/share-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.css'],
})
export class HomeMobileComponent implements OnInit {

  config: SwiperOptions = {
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    }
  }

  sliceOptions = {
    start: 0,
    end: 100,
    default: 100
  }

  content: any
  liked: any;
  showState: any;

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {

    this.content = (content as any).default;

    this.liked = _.fill(Array(this.content.length), false);
    this.showState = _.fill(Array(this.content.length), false);

    console.log(this.content);
    console.log(this.liked);

  }


  toggleLike(imageDetail) {
    console.log(!this.liked[imageDetail.id]);

    this.liked[imageDetail.id] = !this.liked[imageDetail.id];
    if (this.liked[imageDetail.id]) {
      imageDetail["likes"] += 1;
    }
    else {
      imageDetail["likes"] -= 1;

    }
  }

  openShareSheet(imageDetail): void {
    this._bottomSheet.open(ShareSheetComponent, {
      data: { imageDetail },
    });
  }


  onExpandText(imageDetail): void {
    this.sliceOptions.end = this.sliceOptions.end ? undefined : this.sliceOptions.default;
    this.showState[imageDetail.id] = !this.showState[imageDetail.id];
  }
}
