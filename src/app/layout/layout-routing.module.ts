import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages';
import { ValidateSessionGuard } from "@auth/guards/validate-session.guard";
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ValidateSessionGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('@product').then(m => m.ProductModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
