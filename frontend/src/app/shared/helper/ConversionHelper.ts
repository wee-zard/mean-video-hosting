export const convertFormToModel = <T>(source: Partial<any>): T => {
  return Object.assign({}, source) as T;
};
