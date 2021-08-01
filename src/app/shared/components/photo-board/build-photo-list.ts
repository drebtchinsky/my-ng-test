import { PhotoBoard } from './photo-board';

export function buildPhotoList(): PhotoBoard {
  const photos: PhotoBoard = [];
  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: '',
    });
  }
  return photos;
}
