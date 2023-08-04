import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export const ImageGallery = gallery => {
  return (
    <ul class="gallery">
      {gallery.gallery.map(image => (
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          key={image.id}
        />
      ))}
    </ul>
  );
};
