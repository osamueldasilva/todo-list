import { Forms } from "./styled";
import { useFormsProvider } from "../../hooks/useFormContext";
import { ITask } from "../../context/FormContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

export function Form() {
  const {
    title,
    setTitle,
    description,
    setDescription,
    select,
    setSelect,

    setTasks,
  } = useFormsProvider();

  const addTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const objTask: ITask = {
      title: title,
      description: description,
      select: select,
      id: uuidv4(),
    };

    // Assuming setTasks updates the local tasks state
    setTasks((prevState) => [...prevState, objTask]);
    reset();

    toast.success("Tarefa cadastrada com sucesso!");
  };

  function reset() {
    setTitle("");
    setDescription("");
    setSelect("default");
  }

  const isFormValid = title && description && select;

  return (
    <>
      <Forms>
        <input
          type="text"
          placeholder="Digite o titulo da tarefa"
          onChange={(e) => setTitle(e.target.value)}
          maxLength={30}
          value={title}
        />

        <input
          type="text"
          placeholder="Digite a descrição da tarefa"
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
          value={description}
        />

        <select
          onChange={(e) => setSelect(e.target.value)}
          defaultValue=""
          value={select}
        >
          <option disabled selected value="default">
            Selecione um nivel
          </option>
          <option value="Baixo">Baixo</option>
          <option value="Médio">Médio</option>
          <option value="Alto">Alto</option>
        </select>

        <button className="btnAdd" onClick={addTask} disabled={!isFormValid}>
          Adicionar a tarefa
        </button>
        <ToastContainer autoClose={1500} />
      </Forms>
    </>
  );
}
