import {Component, ElementRef, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public  intersectionObserver;
  public showReal: boolean;

  constructor(private ref: ElementRef,  @Inject(PLATFORM_ID) private platformId) {
    if (isPlatformBrowser(platformId)) {
      this.intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
        const entry = entries[0];
        this.showReal = entry.intersectionRatio >= 0;

      });
    }
  }

  ngOnInit() {
    if (this.intersectionObserver != null) {
      this.intersectionObserver.observe(this.ref.nativeElement);
    }
  }

}
