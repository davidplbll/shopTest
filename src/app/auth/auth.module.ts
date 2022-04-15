import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@shared"
import { AuthRoutingModule } from './auth-routing.module';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SiggunpFormComponent } from './components/siggunp-form/siggunp-form.component';
import { InitialMenuComponent } from './components/initial-menu/initial-menu.component';
import { StoreModule } from '@ngrx/store'
import { reducer, authFeatureKey } from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects'
@NgModule({
  declarations: [
    PageAuthComponent,
    LoginFormComponent,
    SiggunpFormComponent,
    InitialMenuComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
