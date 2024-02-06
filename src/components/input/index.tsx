import "./styles.scss";

interface InputProps {
  icon: React.ComponentType;
  placeholder: string;
  type: string;
}

export const Input: React.FC<InputProps> = ({
  icon: Icon,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <div>
      <div className=" input-container">
        {Icon && <Icon />}
        <input type={type} placeholder={placeholder} {...rest} />
      </div>
    </div>
  );
};
