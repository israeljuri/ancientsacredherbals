//@ts-ignore
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

//@ts-ignore
export const cn = (...inputs: any) => {
  //@ts-ignore
  return twMerge(clsx(inputs));
};
