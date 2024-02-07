import "./styles.scss";

interface ButtonProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button>{title}</button>;
};
