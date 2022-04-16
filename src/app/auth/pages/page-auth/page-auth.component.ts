import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'
import { Subject } from 'rxjs';
import { filter, tap, delay, takeUntil } from 'rxjs/operators';
import { getAuthSuccessRegister } from './../../reducers/auth.reducer';

@Component({
  selector: 'app-page-auth',
  templateUrl: './page-auth.component.html',
  styleUrls: ['./page-auth.component.less']
})
export class PageAuthComponent implements OnInit, OnDestroy {

  stepperOptions = [
    {
      label: 'Ingreso',
      id: 'login',
    },
    {
      label: 'Registro',
      id: 'register',
    },
  ]
  vieSuccess: boolean = true;
  viewMenu: boolean = false;
  actualOption = '';
  unSubscribeall$ = new Subject<boolean>();

  constructor(private store: Store, private router: Router) { }
  ngOnInit(): void {
    this.vieSuccess = false
    this.actualOption = this.stepperOptions[0].id;
    this.store.select(getAuthSuccessRegister).pipe(
      takeUntil(this.unSubscribeall$),
      filter(res => res),
      tap(() => this.vieSuccess = true),
      delay(1000)
    ).subscribe(
      () => this.router.navigate(['/'])
    )
  }

  chageStep(event: string) {
    this.actualOption = event;
  }

  ngOnDestroy(): void {
    this.unSubscribeall$.next(true);
  }

}
