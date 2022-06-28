interface ColorProps {
  color: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ColorField({ color, onChange }: ColorProps) {
  return <input type="color" value={color} onChange={onChange} />;
}

export default ColorField;
