import styles from './index.module.css';

interface CompositeImageProps {
  color: string;
  text?: string;
}

function CompositeImage({ color, text = 'test' }: CompositeImageProps) {
  const URL = process.env.REACT_APP_IMAGE_BASE_URL
    ? process.env.REACT_APP_IMAGE_BASE_URL
    : '';
  const FORMATTED_COLOR = color.replace('#', '').toUpperCase();
  return (
    <img
      className={styles.compositeImage}
      alt=""
      src={`${URL}butterfly.jpg?txt=${text}&blend=${FORMATTED_COLOR}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`}
    />
  );
}

export default CompositeImage;
