import "./styles.scss";
import { MdOutlineFileUpload } from "react-icons/md";

interface SendImage {}

export const SendImage: React.FC<SendImage> = ({ ...rest }) => {
  return (
    <div className="send">
      <label htmlFor="fileInput">
        <MdOutlineFileUpload aria-label="Ícone de upload de arquivo" />
        Selecione imagem
      </label>
      <input type="file" id="fileInput" accept="image/*" {...rest} />
    </div>
  );
};
