import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
// import { ItemsComponent } from './item/items.component'
// import { ItemDetailComponent } from './item/item-detail.component'
import { MapViewComponent } from './mapview/mapview.component'
import { registerElement } from '@nativescript/angular';

registerElement("Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, MapViewComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
