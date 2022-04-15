import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component"

const routes: Routes = [
  {
    path: 'auth',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
