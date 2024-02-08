import "./styles.scss";

interface ButtonProps {
  title: string;
  link?: string;
}

export const Button: React.FC<ButtonProps> = ({ title, link }) => {
  return (
    <a className="button" href={link}>
      {title}
    </a>
  );
};
