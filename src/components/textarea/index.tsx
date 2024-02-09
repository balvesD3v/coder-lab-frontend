import "./styles.scss";

interface textAreaProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<textAreaProps> = ({ onChange }) => {
  return (
    <textarea
      cols={140}
      placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
      onChange={onChange}
    ></textarea>
  );
};
