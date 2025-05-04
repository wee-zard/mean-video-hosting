export const getLastUrlChunk = (url: string): string => {
  const splittedUrl = url.split('/');
  return splittedUrl[splittedUrl.length - 1];
};
