export const generateImgSrc = (imgRef: string) => {
  const refWithoutImgPre = imgRef.slice(6);
  const lastIndex = refWithoutImgPre.lastIndexOf("-");
  const refForUrl = `${refWithoutImgPre.slice(
    0,
    lastIndex
  )}.${refWithoutImgPre.slice(lastIndex + 1)}`;
  const finalImgSrc = `https://cdn.sanity.io/images/hxf7pr1f/production/${refForUrl}`;
  return finalImgSrc;
};
