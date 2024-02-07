import "./styles.scss";

interface SelectProps {}

export const Select: React.FC<SelectProps> = ({ ...rest }) => {
  return (
    <div>
      <label htmlFor="">Categoria</label>
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
