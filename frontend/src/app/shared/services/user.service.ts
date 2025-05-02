import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/models/UserModels';
import { StorageKeyEnum } from '../enums/StorageKeyEnums';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  private userModel = new BehaviorSubject<UserModel | undefined>(undefined);
  userModel$ = this.userModel.asObservable();
  server: string = `${environment.serverUrl}/user`;

  constructor() {}

  ngOnInit(): void {
    const userStorage = localStorage.getItem(StorageKeyEnum.AUTHENTICATED_USER);

    if (!userStorage) {
      return;
    }

    const user: UserModel = JSON.parse(userStorage);

    this.updateUserModel(user);
  }

  updateUserModel(user?: UserModel) {
    this.userModel.next(user);
  }
}
