import { getRequestHeader } from './../helper/HttpHeaderHelper';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/models/UserModels';
import { StorageKeyEnum } from '../enums/StorageKeyEnums';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  private userModel = new BehaviorSubject<UserModel | undefined>(undefined);
  userModel$ = this.userModel.asObservable();
  private server: string = `${environment.serverUrl}/user`;

  constructor(private http: HttpClient) {}

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

  /**
   * Checks whether the provided content creator user is exists on the server or not.
   *
   * @param userId The id of the content creator user to validate if exists on the server.
   * @returns Returns true if the content creator is exists, else false.
   */
  isContentCreatorExists(userId: string): Promise<boolean> {
    const queryParams = new HttpParams().append('user_id', userId);

    return lastValueFrom(
      this.http.get<boolean>(
        `${this.server}/is-exists`,
        getRequestHeader({ params: queryParams }),
      ),
    );
  }
}
