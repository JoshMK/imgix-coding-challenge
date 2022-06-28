import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './index.module.css';

type SizeRange = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  children: ReactNode;
  size?: SizeRange;
  className?: string;
}

export default function Heading({
  children,
  size = 1,
  className,
}: HeadingProps): JSX.Element {
  const HeadingSize = `h${size}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingSize className={classNames(className, styles.heading)}>
      {children}
    </HeadingSize>
  );
}
