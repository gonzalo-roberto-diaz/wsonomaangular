import {PriceRange} from './PriceRange';
import {Image} from './Image';
import {Flag} from "app/models/Flag";

export class Product {
    id: string;
    name: string;
    priceRange: PriceRange;
    thumbnail: Image;
    images: Image[];
    flags: Flag[];
    hero: Image;
}