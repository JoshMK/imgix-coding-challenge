import styles from './index.module.css';

interface CompositeImageProps {
  color: string;
  text?: string;
}

function CompositeImage({ color, text = '' }: CompositeImageProps) {
  const URL = process.env.REACT_APP_IMAGE_BASE_URL
    ? process.env.REACT_APP_IMAGE_BASE_URL
    : '';
  const FORMATTED_COLOR = color.replace('#', '').toUpperCase();
  const FORMATTED_TEXT = text.replace(' ', '%20');
  return (
    <img
      className={styles.compositeImage}
      alt=""
      src={`${URL}butterfly.jpg?txt=${FORMATTED_TEXT}&blend=${FORMATTED_COLOR}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`}
    />
  );
}

export default CompositeImage;
