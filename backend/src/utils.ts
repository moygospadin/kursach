import { extname } from "path";

export const editFileName = (_, file: any, callback: any) => {
  const fileExtName = extname(file.originalname);
  const randomName = Array(14)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join("");
  callback(null, `${'image'}-${randomName}${fileExtName}`);
};
