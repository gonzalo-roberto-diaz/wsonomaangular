import {Injectable} from '@angular/core';
import {Product} from '../models/Product';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CatalogService} from '../services/catalog.service';
import {Observable} from 'rxjs';


@Injectable()
export class ProductModelResolver implements Resolve<Product> {

    constructor(private backend: CatalogService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product> | Promise<Product> | Product {
        return this.backend.retrieveProduct(route.params['id']);
    }
}
