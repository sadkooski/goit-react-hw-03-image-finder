import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = gallery => {
  return (
    <ul class="gallery">
      {gallery.gallery.forEach(image => {
        console.log(image.webformatURL);
        return (
          <li class="gallery-item">
            {' '}
            <span>ok</span>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        );
      })}{' '}
      <span>hej</span>
    </ul>
  );
};
//  <ImageGalleryItem
//             src={image.webformatURL}
//             alt={image.tags}
//             key={image.id}
//           />
