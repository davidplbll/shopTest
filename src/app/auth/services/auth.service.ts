import { Injectable } from '@angular/core';
import { LOGIN, USER } from './../interfaces'
import { DataBaseService } from "@shared/services"
import { map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataBaseService: DataBaseService) { }

  createUser(user: USER) {
    return this.dataBaseService.executeSql(
      `INSERT INTO USER (email, name, lastName,password) VALUES (?, ?, ?,?)`,
      [user.email, user.name, user.lastName, user.password]
    );
  }

  login(user: LOGIN) {
    return this.dataBaseService.executeSql(
      `SELECT email, name, lastName FROM USER  WHERE email = ? AND password = ?`,
      [user.email, user.password]
    ).pipe(map((data: any) => {
      if (data.rows.length) {
        return data.rows.item(0);
      }
      throw  new Error('User not found');
    })
    );
  }
}
