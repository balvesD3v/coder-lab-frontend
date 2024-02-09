import "./styles.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
