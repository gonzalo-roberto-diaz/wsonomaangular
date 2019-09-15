import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogService } from './services/catalog.service';
import { ProductContainerComponent } from './product/product-container.component';
import {Globals} from './globals';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule, MatDialogModule
} from '@angular/material';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {ProductModelResolver} from './services/product-model-resolver.service';
import {CoverComponent} from './cover/cover.component';
import {ProductSelectorItemComponent} from './cover/product-selector-item/product-selector-item.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment.prod";
import {OwlModule} from "ngx-owl-carousel";
export const APP_ID = 'my-app';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    ProductSelectorItemComponent,
    ProductContainerComponent,
    MenuComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule.withServerTransition({appId: APP_ID}),
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatIconModule, MatSelectModule,
        NgxYoutubePlayerModule.forRoot(),
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule, MatRadioModule, MatIconModule, MatDialogModule,
        MatMenuModule,
        OwlModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
  providers: [CatalogService, Globals, ProductModelResolver],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
