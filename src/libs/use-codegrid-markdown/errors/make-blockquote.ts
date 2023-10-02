export const makeBlockquote = (body: string): string => {
  const lines = body.split('\n');
  return lines.map((line) => `  > ${line}`).join('\n');
};
