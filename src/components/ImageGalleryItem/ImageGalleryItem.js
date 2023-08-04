export const ImageGalleryItem = ({ src, alt, key }) => {
  return (
    <li class="gallery-item">
      <img src={src} alt={alt} />
    </li>
  );
};
