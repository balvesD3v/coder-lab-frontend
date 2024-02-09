import "./styles.scss";

interface SelectProps {
  onChange: (categoryId: string) => void;
  values: { name: string; id: string }[];
  id?: string | undefined;
}

export const Select: React.FC<SelectProps> = ({ id, onChange, values }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = event.target.value;
    onChange(selectedCategoryId);
  };

  return (
    <div className="select">
      <select
        name=""
        id=""
        onChange={handleChange}
        defaultValue={values.find((value) => value.id === id)?.name}
      >
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
