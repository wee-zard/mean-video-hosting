import { HttpHeaders, HttpParams } from '@angular/common/http';

type HeaderOptions = {
  headers: HttpHeaders;
  withCredentials: boolean;
  params?: HttpParams;
};

type HeaderOptionParams = {
  isWithCredentials?: boolean;
  params?: HttpParams;
};

export const getRequestHeader = (
  headerOptionParams: HeaderOptionParams,
): HeaderOptions => {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: headerOptionParams.isWithCredentials ?? false,
    params: headerOptionParams.params,
  };
};
