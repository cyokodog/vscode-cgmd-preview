export class ReplaceCgmdDetectionError extends Error {
  name = this.constructor.name;

  constructor(
    message: string,
    private target_: Node,
  ) {
    super(message);
  }

  get target(): HTMLElement {
    return this.target_ as HTMLElement;
  }
}
