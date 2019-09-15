import {Component, OnInit} from '@angular/core';
import {Globals} from './globals';
import {Meta} from "@angular/platform-browser";
import {CatalogService} from "./services/catalog.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private globals: Globals, private catalogService: CatalogService, private meta: Meta) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'theme-color', content: "#FBFBFB"});
  }
}
