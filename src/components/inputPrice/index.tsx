import "./styles.scss";

interface InputPriceProps {
  icon?: React.ComponentType;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputPrice: React.FC<InputPriceProps> = ({
  icon: Icon,
  placeholder,
  type,
  onChange,
  ...rest
}) => {
  return (
    <div>
      <div className=" input-container">
        {Icon && <Icon />}
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
};
