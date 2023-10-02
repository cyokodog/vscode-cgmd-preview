/**
 * Error に処理中のファイル（.md）情報を付与したエラー
 */
export class UploadError extends Error {
  constructor(original: Error, file: string) {
    super([original.message, `In ${file}`].join('\n'));
  }
}
