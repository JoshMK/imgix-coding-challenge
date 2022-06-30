import styles from './index.module.css';

interface ColorProps {
  colorValue: string;
  id: string;
  labelText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ColorField({
  colorValue,
  id,
  labelText,
  onChange,
}: ColorProps) {
  return (
    <>
      <label htmlFor={id} className={styles.colorFieldLabel}>
        {labelText}
      </label>
      <input
        id={id}
        type="color"
        value={colorValue}
        onChange={onChange}
        className={styles.colorFieldInput}
      />
    </>
  );
}
