import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Globals} from "../globals";
import {Router} from "@angular/router";
import {FlagType} from "../models/FlagType";
import {OrderProductsBy} from "app/models/OrderProductsBy";

@Component({
  selector: '[app-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public globals: Globals, private router: Router, private changeDetector: ChangeDetectorRef) {
    globals.inCover = true;
    this.globals.mainHeader = "All Products";
  }

  async homeSelected() {
    this.globals.flagType = null;
    this.globals.inCover = true;
    await this.router.navigate(['/'], {queryParams : { 'orderBy': this.globals.orderProductsBy}});
    this.globals.mainHeader = "All Products";
  }

  async orderProductsBySelected(orderProductsBy: string) {
    this.globals.orderProductsBy = OrderProductsBy[orderProductsBy];
    if (this.globals.flagType == null) {
      await this.router.navigate(['/'], {queryParams: {'orderBy': orderProductsBy}});
      this.globals.mainHeader = "All Products";
    }else {
      switch (this.globals.flagType) {
        case FlagType.Organic:
          await this.router.navigate(['/organic'], {queryParams: {'orderBy': orderProductsBy}});
          this.globals.mainHeader = "Organic Products";
          break;
        case FlagType.FairTrade:
          await this.router.navigate(['/fair-trade'], {queryParams: {'orderBy': orderProductsBy}});
          this.globals.mainHeader = "Fair Trade Products";
          break;
      }
    }
  }


  async flagTypeSelected(flagType: string) {
    // this.defaultSOngOrderBy();
    this.globals.inCover = true;
    switch (flagType) {
      case 'organic':
        this.globals.flagType = FlagType.Organic;
        this.changeDetector.detectChanges();
        await this.router.navigate(['/organic'], {queryParams : { 'orderBy': this.globals.orderProductsBy}});
        this.globals.mainHeader = "Organic Products";
        break;
      case 'fairTrade':
        this.globals.flagType = FlagType.FairTrade;
        this.changeDetector.detectChanges();
        await this.router.navigate(['/fair-trade'], {queryParams : { 'orderBy': this.globals.orderProductsBy}});
        this.globals.mainHeader = "Fair Trade Products";
        break;
    }
  }



  ngOnInit() {}

}
