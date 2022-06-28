import styles from './index.module.css';

interface TextFieldProps {
  labelContent: string | React.ReactElement;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ labelContent, id, onChange }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{labelContent}</label>
      <input
        className={styles.textFieldLabel}
        id={id}
        onChange={onChange}
        type="text"
      />
    </div>
  );
}

export default TextField;
