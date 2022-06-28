interface CompositeImageProps {
  baseURL: string;
  text?: string;
}

function CompositeImage({ baseURL, text = 'test' }: CompositeImageProps) {
  return (
    <img
      alt=""
      src={`${baseURL}butterfly.jpg?txt=${text}&blend=4400bb&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`}
    />
  );
}

export default CompositeImage;
