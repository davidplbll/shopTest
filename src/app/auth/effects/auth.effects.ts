import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from '../actions'
import { AuthService } from './../services'
import { AlertService } from '@shared/services'
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadRegister),
      switchMap(({ data }) =>
        this.authService.createUser(data).pipe(
          map(_ => AuthActions.loadRegisterSuccess({ data })),
          catchError(error => of(AuthActions.loadRegisterFailure({ error })))
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadLogin),
      switchMap(({ data }) =>
        this.authService.login(data).pipe(
          map(user => AuthActions.loadLoginSuccess({ data: user })),
          catchError(error => of(AuthActions.loadLoginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadLoginSuccess),
      tap(({ data }) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/'])
      })
    ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadLoginFailure),
      tap(({ error }) => {
        this.alertService.MessageError('Usuario o contraseña incorrectos')
      })
    ),
    { dispatch: false }
  );

  registerFailure$ = createEffect(() =>

    this.actions$.pipe(
      ofType(AuthActions.loadRegisterFailure),
      tap(({ error }) => {
        this.alertService.MessageError('Usuario ya registrado')
      })
    ),
    { dispatch: false }
  );
  registerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadRegisterSuccess),
      tap(({ data }) => {
        localStorage.setItem('user', JSON.stringify(data));
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) { }

}
