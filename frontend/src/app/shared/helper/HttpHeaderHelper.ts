import { HttpHeaders } from '@angular/common/http';

type HeaderOptions = {
  headers: HttpHeaders;
  withCredentials: boolean;
};

export const getHeaderWithCredential = (
  isWithCredentials: boolean = false,
): HeaderOptions => {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: isWithCredentials,
  };
};
