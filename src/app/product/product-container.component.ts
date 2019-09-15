import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    OnInit,
    PLATFORM_ID,
    Renderer2
} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/Product';
import {isPlatformBrowser} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';
import {Globals} from "../globals";

@Component({
    selector: '[app-productcontainer]',
    templateUrl: './product-container.component.html',
    styleUrls: ['./product-container.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit, OnDestroy {

    private sub: any;
    private urlKey: string;
    private id: string;

    public product: Product;
    public tags: string[];
    public isBrowser;


    constructor(private route: ActivatedRoute, private router: Router, private elementRef: ElementRef,
                private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId, private changeDetector: ChangeDetectorRef,
                private title: Title, private meta: Meta, private globals: Globals) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    async ngOnInit() {
        this.globals.inCover = false;
        const attributeSelector  = 'name="description"';
        this.meta.removeTag(attributeSelector);
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.globals.urlKey = this.urlKey;

            this.product = this.route.snapshot.data.product;
            if (this.product != null) {
                this.title.setTitle(this.product.name);
                this.meta.updateTag({ name: 'description', content: this.product.name});
                this.globals.mainHeader = this.product.name;
                this.tags = this.product.flags.map(f => f.id);
            }
        });


        this.changeDetector.detectChanges();

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}
