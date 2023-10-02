type tPictureProps = {
  alt: string;
  className?: string;
  pngPicture: string;
  webpPicture: string;
};

const Picture = ({
  alt,
  className = 'mainPictures',
  pngPicture,
  webpPicture,
}: tPictureProps) => {
  return (
    <>
      <source srcSet={webpPicture} type="image/webp" />
      <img alt={alt} className={className} src={pngPicture} />
    </>
  );
};

export default Picture;
