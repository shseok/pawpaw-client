/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line max-classes-per-file
export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}
export class ImageSizeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ImageSizeError';
  }
}
