import { Injectable } from '@angular/core';
import sweetalert2 from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  /**
   * @param  {string} message
   * @returns void
   */
  MessageError(message: string): void {
    sweetalert2({
      type: 'error',
      title: 'Error',
      confirmButtonText: 'Cerrar',
      text:message,
    }).catch((err) => console.log(err));
  }

  /**
   * @param  {string} message
   * @returns void
   */
  Messagesuccess(message: string, title?: string): void {
    sweetalert2({
      type: 'success',
      title: title ?? 'Completado',
      text:message,
      timer: 2000,
      showConfirmButton: false,
    }).catch((err) => console.log(err));
  }

 
}
