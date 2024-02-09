import "./styles.scss";

interface SelectProps {
  onChange: (categoryId: string) => void;
  values: { name: string; id: string }[];
}

export const Select: React.FC<SelectProps> = ({ onChange, values }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = event.target.value;
    onChange(selectedCategoryId);
  };

  return (
    <div className="select">
      <select name="" id="" onChange={handleChange}>
        <option value="" selected disabled hidden>
          Selecione uma opção
        </option>
        {values.map((value) => (
          <option value={value.id}>{value?.name}</option>
        ))}
      </select>
    </div>
  );
};
