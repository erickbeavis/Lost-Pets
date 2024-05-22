export interface PhotoType {
  id: string;
  location: string;
  content: string;
}

export interface ImageType {
  assetId: string;
  base64: null | string;
  duration: null;
  exif: null;
  fileName: string;
  fileSize: number;
  height: number;
  type: string;
  uri: string;
  width: number;
}
