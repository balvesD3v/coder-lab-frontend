import "./styles.scss";
import { MdOutlineFileUpload } from "react-icons/md";

interface SendImageProps {
  onImageSelect: (file: File) => void;
}

export const SendImage: React.FC<SendImageProps> = ({ onImageSelect }) => {
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div className="send">
      <label htmlFor="fileInput">
        <MdOutlineFileUpload aria-label="Ícone de upload de arquivo" />
        Choose an image
      </label>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleImageSelect}
      />
    </div>
  );
};
