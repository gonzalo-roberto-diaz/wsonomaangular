import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../services/catalog.service';
import {Product} from '../models/Product';
import {Globals} from '../globals';
import {FlagType} from '../models/FlagType';
import {ActivatedRoute} from '@angular/router';
import {OrderProductsBy} from "app/models/OrderProductsBy";

@Component({
    selector: '[app-cover]',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

    public productSelectors: Product[];

    constructor(private route: ActivatedRoute, private catalogService: CatalogService, private globals: Globals) {

        this.route.queryParams.subscribe(queryParams => {
            if (route != null) {
                if (queryParams.orderBy != null) {
                    this.globals.orderProductsBy = queryParams.orderBy;
                }
                this.ngOnInit();
            }
        });

    }

    async ngOnInit() {
        this.globals.inCover = true;
        this.productSelectors = this.globals.catalog;


        if (this.globals.orderProductsBy == null){
            this.globals.orderProductsBy = OrderProductsBy.Alphabetical;
        }

        if (this.route.snapshot.url.length > 0) {
            const url = this.route.snapshot.url[0].toString();
            if (url === 'organic') {
                this.globals.flagType = FlagType.Organic;
                this.globals.mainHeader  = "Organic Products";
            } else if (url === 'fair-trade') {
                this.globals.flagType = FlagType.FairTrade;
                this.globals.mainHeader  = "Fair Trade Products";
            }

            this.catalogService.retrieveSelectorsByTag(this.globals.flagType, this.globals.orderProductsBy).then(products => {
                this.productSelectors = products;
                this.globals.urlKey = null;
            })


        } else { //no elements after the url part, meaning show all
            this.catalogService.retrieveAllSelectors(this.globals.orderProductsBy).then(products => {
                this.productSelectors = products;
                this.globals.urlKey = null;
                this.globals.flagType = null;
            });
        }
    }




}
