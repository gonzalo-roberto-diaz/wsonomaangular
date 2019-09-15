import {
    Component,
    ElementRef,
    Inject,
    Input,
    OnInit,
    PLATFORM_ID} from '@angular/core';
import {Product} from 'app/models/Product';
import {isPlatformBrowser} from "@angular/common";

@Component({
    selector: 'app-product-selector-item',
    templateUrl: './product-selector-item.component.html',
    styleUrls: ['./product-selector-item.component.css']
})
export class ProductSelectorItemComponent implements OnInit {

    @Input() productSelectorItem: Product;
    public imageUrl: string;
    public  intersectionObserver;
    public showReal: boolean;
    @Input() public selectorIndex: number;



    constructor(private ref: ElementRef,  @Inject(PLATFORM_ID) private platformId) {
    }



    async ngOnInit() {
        if (isPlatformBrowser(this.platformId)) this.intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
            const entry = entries[0];
            this.showReal = entry != null;
        });

        this.imageUrl =  this.productSelectorItem.thumbnail.href ;
        if (this.intersectionObserver != null) {
            this.intersectionObserver.observe(this.ref.nativeElement);
        }
    }

}
