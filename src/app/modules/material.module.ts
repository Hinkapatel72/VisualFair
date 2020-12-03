import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { environment } from '../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ]
})
export class MatirialModule {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'camera_sidenav',
      sanitizer.bypassSecurityTrustResourceUrl(environment.icon_navbar_photography));

    iconRegistry.addSvgIcon(
      'poetry_sidenav',
      sanitizer.bypassSecurityTrustResourceUrl(environment.icon_navbar_poetry));

    iconRegistry.addSvgIcon(
      'art_sidenav',
      sanitizer.bypassSecurityTrustResourceUrl(environment.icon_navbar_art));

    iconRegistry.addSvgIcon(
      'graphics_sidenav',
      sanitizer.bypassSecurityTrustResourceUrl(environment.icon_navbar_graphics));

  }

}
