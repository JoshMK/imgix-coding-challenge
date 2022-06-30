import { ReactNode } from 'react';
import styles from './index.module.css';

type SizeRange = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  children: ReactNode;
  size?: SizeRange;
}

export default function Heading({
  children,
  size = 1,
}: HeadingProps): JSX.Element {
  const HeadingSize = `h${size}` as keyof JSX.IntrinsicElements;
  return <HeadingSize className={styles.heading}>{children}</HeadingSize>;
}
