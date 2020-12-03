import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-share-sheet',
  templateUrl: './share-sheet.component.html',
  styleUrls: ['./share-sheet.component.css']
})
export class ShareSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ShareSheetComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    console.log(data);

  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
