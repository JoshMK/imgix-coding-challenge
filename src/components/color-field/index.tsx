import styles from './index.module.css';

interface ColorProps {
  color: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ColorField({ color, id, onChange }: ColorProps) {
  return (
    <>
      <label htmlFor={id} className={styles.colorFieldLabel}>
        Pick a color:
      </label>
      <input
        id={id}
        type="color"
        value={color}
        onChange={onChange}
        className={styles.colorFieldInput}
      />
    </>
  );
}

export default ColorField;
