import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private isSidenavOpen = new BehaviorSubject<boolean>(true);
  isSidenavOpen$ = this.isSidenavOpen.asObservable();

  updateToggleSidenav() {
    this.isSidenavOpen.next(!this.isSidenavOpen.getValue());
  }
}
