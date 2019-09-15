import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/Product';
import {environment} from '../../environments/environment';
import {OrderProductsBy} from "../models/OrderProductsBy";
import {Globals} from "../globals";
import {AllNew} from "../models/AllNew";
import * as catalogImport from '../../assets/json/catalog.json'

@Injectable()
export class CatalogService {


  constructor(private http: HttpClient, private httpService: HttpClient, private global: Globals) {
      if (environment.cachedApiCalls){
          //load products
          const cat = catalogImport as unknown;
          const allNew = cat as AllNew;
          this.global.catalog = allNew.groups;
      }else{
          this.http.get<AllNew>( environment.javaHost + '/services/catalog/v4/category/shop/new/all-new/index.json')
              .subscribe(data => {
                  if ( data != null ) {
                      this.global.catalog = data.groups;
                  } else {
                      alert('We apologize, the catalog could not be loaded');
                  }
              });
      }

  }

    async retrieveProduct(id: string): Promise<Product> {
        const result = this.global.catalog.filter(x => x.id == id);
        return result[0];
    }


    async retrieveAllSelectors(orderBy: OrderProductsBy): Promise<Product[]> {
        return  CatalogService.sortProducts(this.global.catalog, orderBy);
    }

    private static async sortProducts(products: Product[], orderBy: OrderProductsBy){
        switch(orderBy){
            case 'CHEAPEST_FIRST':
                return products.sort((a, b) => a.priceRange.selling.low < b.priceRange.selling.low ? -1 : a.priceRange.selling.low > b.priceRange.selling.low ? 1 : 0);
            case 'ALPHABETICAL':
                return products.sort((a, b) => a.name < b.name ? -1 : a.name> b.name ? 1 : 0);
            default:
                throw new Error("order by " + orderBy + "not supported");
        }
    }

    async retrieveSelectorsByTag(flag: string, orderBy: OrderProductsBy): Promise<Product[]> {
        let filteredProducts = this.global.catalog.filter(x => {
            const flagIds = x.flags.map(f => f.id);
            return flagIds.includes(flag);
        });
        return  CatalogService.sortProducts(filteredProducts, orderBy);
    }

}
