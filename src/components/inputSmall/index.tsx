import "./styles.scss";

interface InputProps {
  link: string;
  title: string;
}

export const InputSmall: React.FC<InputProps> = ({ link, title, ...rest }) => {
  return (
    <a href={link} type="button" {...rest}>
      {title}
    </a>
  );
};
