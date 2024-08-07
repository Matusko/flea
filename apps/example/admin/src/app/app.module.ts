import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FullComponent} from './layouts/full/full.component';
import {MaterialModule} from './material.module';
import {SidebarComponent} from './layouts/full/sidebar/sidebar.component';
import {BrandingComponent} from './layouts/full/sidebar/branding.component';
import {AppNavItemComponent} from './layouts/full/sidebar/nav-item/nav-item.component';
import {
  HeaderComponent
} from './layouts/full/header/header.component';
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import {StoreModule} from '@ngrx/store';
import {petReducer} from './pages/pet/pet.reducer';
import {metaReducers} from './log/log.reducer';
import {EffectsModule} from '@ngrx/effects';
import {PetEffect} from './pages/pet/pet.effect';
import {HttpClientModule} from '@angular/common/http';
import {PublicBusService} from './services/public-bus.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent,
    BrandingComponent,
    AppNavItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([PetEffect]),
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(
      {
        pet: petReducer
      }, {
        metaReducers
      }),
    TablerIconsModule.pick(TablerIcons),
  ],
  providers: [
    PublicBusService
  ],
})
export class AppModule {}
