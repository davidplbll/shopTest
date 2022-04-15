import { Injectable } from '@angular/core';
import { environment } from '@env';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor() { }

  openDatabase() {
    const { db: { description, name, version } } = environment;
    const objectStore = (window as any).openDatabase(name, version, description, 2 * 1024 * 1024, (event: any) => (
      console.log(event)
    ));
    objectStore.transaction((tx: any) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS USER (email unique, name, lastName,password)');
    });
    return objectStore;
  }

  executeSql(sql: string, params: any[]): Observable<any> {
    const objectStore = this.openDatabase();
    return from<any>(
      new Promise((resolve, reject) => {
        objectStore.transaction((tx: any) => {
          tx.executeSql(sql, params, (_: any, result: any) => {
            resolve(result);
          }, (_: any, error: any) => {
            if (String(error?.message)?.includes('UNIQUE constraint failed')) {
              reject({
                error,
                uniqueFailed: true
              });
            }
            reject(error);
          });
        });
      })
    )
  }

}
