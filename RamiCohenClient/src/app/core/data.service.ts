import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  private messageSource2 = new BehaviorSubject('default message');
  currentMessage2 = this.messageSource2.asObservable();
  allPassedData: any[] = [];
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeMessage2(message: string) {
    this.messageSource2.next(message)
  }
  storePassedObject(passedData) {
    this.allPassedData = passedData;
  }
  retrievePassedObject() {
    return this.allPassedData;   
  }
}