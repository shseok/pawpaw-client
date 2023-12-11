export async function convertUrlsToFiles(urls: string[]) {
  const promises = urls.map(async (url, index) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], `image${index}`, { type: blob.type });
    return file;
  });

  const files = await Promise.all(promises);
  return files;
}
