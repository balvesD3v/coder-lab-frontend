import { FaAngleLeft } from "react-icons/fa6";
import "./styles.scss";
import { Select } from "../../components/select";
import { Input } from "../../components/input";
import { SendImage } from "../../components/sendImage";
import { Textarea } from "../../components/textarea";
import { Button } from "../../components/button";

export const Edit = () => {
  return (
    <main className="DivStyled">
      <a href="/" className="linkto">
        <FaAngleLeft /> voltar
      </a>

      <h1 className="new">Editar prato</h1>

      <section>
        <div className="InputField">
          <SendImage />
          <Input placeholder="nome do produto" type="text" />
          <Select />
          <Input placeholder="preço" type="number" />
        </div>

        <Textarea />
      </section>

      <div className="button-save">
        <Button title={"Salvar Alterações"} link="/edit" />
        <Button title={"Excluir Alterações"} link="/edit" />
      </div>
    </main>
  );
};
