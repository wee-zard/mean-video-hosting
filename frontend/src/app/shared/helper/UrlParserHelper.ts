const splitUrl = (url: string): string[] => {
  return url.split('/');
};

export const getLastUrlChunk = (url: string): string => {
  const splittedUrl = splitUrl(url);
  return splittedUrl[splittedUrl.length - 1];
};

export const getUrlRouteName = (url: string): string => {
  const splittedUrl = splitUrl(url);
  return splittedUrl[splittedUrl.length - 2];
};
