import styles from './index.module.css';

interface TextFieldProps {
  labelContent: string | React.ReactElement;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ labelContent, id, onChange }: TextFieldProps) {
  return (
    <>
      <label htmlFor={id} className={styles.textFieldLabel}>
        {labelContent}
      </label>
      <input
        className={styles.textFieldInput}
        id={id}
        onChange={onChange}
        type="text"
      />
    </>
  );
}

export default TextField;
