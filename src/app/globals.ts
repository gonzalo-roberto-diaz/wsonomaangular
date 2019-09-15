import { Injectable } from '@angular/core';
import {Product} from "./models/Product";
import {OrderProductsBy} from "app/models/OrderProductsBy";
import {FlagType} from "app/models/FlagType";

@Injectable()
export class Globals {
  flagType: FlagType;
  urlKey: string;
  inCover: boolean;
  orderProductsBy: OrderProductsBy;
  mainHeader: string;
  catalog: Product[];
}
