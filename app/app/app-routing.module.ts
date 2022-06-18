import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { MapViewComponent } from './mapview/mapview.component'

const routes: Routes = [
  { path: '', redirectTo: '/mapview', pathMatch: 'full' },
  { path: 'mapview', component: MapViewComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
