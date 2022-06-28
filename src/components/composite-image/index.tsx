interface CompositeImageProps {
  baseURL: string;
  color: string;
  text?: string;
}

function CompositeImage({
  baseURL,
  color,
  text = 'test',
}: CompositeImageProps) {
  return (
    <img
      alt=""
      src={`${baseURL}butterfly.jpg?txt=${text}&blend=${color}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`}
    />
  );
}

export default CompositeImage;
