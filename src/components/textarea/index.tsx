import "./styles.scss";

interface TextareaProps {
  placeholder?: string;
  name: string | undefined;
  value?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <textarea
      cols={140}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};
