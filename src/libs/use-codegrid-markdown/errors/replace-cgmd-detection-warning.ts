import { makeBlockquote } from './make-blockquote';

export class ReplaceCgmdDetectionWarning extends Error {
  name = this.constructor.name;

  constructor(message: string, target_: Node) {
    super(message);
    this.message = [
      message,
      `\n${makeBlockquote((target_ as HTMLElement).outerHTML)}\n`,
    ].join('\n');
  }
}
