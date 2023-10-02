import { makeBlockquote } from './make-blockquote';

const makeMessage = (
  message: string,
  file: string,
  target: HTMLElement | null,
): string => {
  const messages = [message, `In ${file}`];

  if (target !== null) {
    messages.push(`\n${makeBlockquote(target.outerHTML)}\n`);
  }

  return messages.join('\n');
};

export class ReplaceCgmdError extends Error {
  name = this.constructor.name;

  constructor(message_: string, file: string, target: HTMLElement | null) {
    super(message_);
    this.message = makeMessage(message_, file, target);
  }
}
