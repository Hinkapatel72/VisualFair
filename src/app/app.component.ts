import { Component, OnInit } from '@angular/core';
import { Fullstory } from 'ng-fullstory';
import { ThemeService } from './services/theme.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  resetQuoteSubject: Subject<boolean> = new Subject<boolean>();

  title = 'VisualFlair';
  isMobile: boolean;
  themeType: string = "Light";

  themePreference: FormGroup;
  autoTheme: FormControl;
  theme: FormControl;

  constructor(private fullstory: Fullstory, private themeService: ThemeService, public breakpointObserver: BreakpointObserver, private cookieService: CookieService) {

    this.themePreference = new FormGroup({
      theme: new FormControl(false),
      autoTheme: new FormControl()
    })
  }
  ngOnInit() {
    // this.fullstory.login({
    //   user_id: id
    //   email: email
    // });


    this.breakpointObserver
      .observe(['(min-width: 720px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });

    this.initialiseThemePreference();

    this.themePreference.controls["autoTheme"].valueChanges.subscribe(value => {
      if (value) {
        this.cookieService.set('autoTheme', "true");
        let now = moment().format('HH');
        if (Number(now) > 19) {
          this.themeService.setDarkTheme();
          this.themeType = "Dark";
          this.themePreference.controls["theme"].setValue(true);
          this.cookieService.set('theme', "Dark");
        }
        else {
          this.themeService.setLightTheme();
          this.themeType = "Light";
          this.themePreference.controls["theme"].setValue(false);
          this.cookieService.set('theme', "Light");
        }
      }
      else
        this.cookieService.set('autoTheme', "false");
    })
  }

  initialiseThemePreference() {
    if (this.cookieService.get("autoTheme")) {
      this.themePreference.controls["autoTheme"].setValue(this.cookieService.get("autoTheme") == "true" ? true : false);

      if (this.themePreference.controls["autoTheme"].value) {
        let now = moment().format('HH');
        if (Number(now) > 18) {
          this.themeService.setDarkTheme();
          this.themeType = "Dark";
          this.themePreference.controls["theme"].setValue(true);
          this.cookieService.set('theme', "Dark");
        }
        else {
          this.themeService.setLightTheme();
          this.themeType = "Light";
          this.themePreference.controls["theme"].setValue(false);
          this.cookieService.set('theme', "Light");
        }

      }

    }

    if (this.cookieService.get("theme")) {
      this.themePreference.controls["theme"].setValue(this.cookieService.get("theme"));

      if (this.themePreference.controls["theme"].value === "Light") {
        this.themeService.setLightTheme();
        this.themePreference.controls["theme"].setValue(false);
        this.themeType = "Light";
      }
      else {
        this.themeService.setDarkTheme();
        this.themePreference.controls["theme"].setValue(true);
        this.themeType = "Dark";

      }

    }

  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      this.themeType = "Light";
      this.themePreference.controls["theme"].setValue(false);
      this.cookieService.set('theme', "Light");

    } else {
      this.themeService.setDarkTheme();
      this.themeType = "Dark";
      this.themePreference.controls["theme"].setValue(true);
      this.cookieService.set('theme', "Dark");
    }
  }

  resetQuoteComponent() {
    this.resetQuoteSubject.next(true);
  }

  swipeLeft() {
    console.log("swipe");

  }
  ngOnDestroy(): void {
    this.fullstory.logout();
  }
}
