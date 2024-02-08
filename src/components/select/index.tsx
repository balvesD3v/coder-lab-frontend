import "./styles.scss";

interface SelectProps {}

export const Select: React.FC<SelectProps> = ({ ...rest }) => {
  return (
    <div className="select">
      <select name="" id="" {...rest}>
        <option value="" selected disabled hidden>
          Selecione uma opção
        </option>
        <option value="sobremesas">Sobremesas</option>
        <option value="bebidas">Bebidas</option>
        <option value="refeicoes">Refeições</option>
      </select>
    </div>
  );
};
