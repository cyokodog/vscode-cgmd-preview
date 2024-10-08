import * as fs from 'fs';
import * as path from 'path';

export async function getUniqueFileName(
  dir: string,
  baseName: string,
  ext: string
): Promise<string> {
  // 初回確認: `foo.png` の存在を確認
  let uniqueName = `${baseName}${ext}`;
  let uniquePath = path.join(dir, uniqueName);

  // 最初のファイル名が存在しなければ、そのまま使用
  if (!fs.existsSync(uniquePath)) {
    return uniquePath;
  }

  // `foo.png` が存在する場合、`foo-2.png` から連番を追加
  let counter = 2;
  while (fs.existsSync(uniquePath)) {
    uniqueName = `${baseName}-${counter}${ext}`;
    uniquePath = path.join(dir, uniqueName);
    counter++;
  }

  return uniquePath;
}
