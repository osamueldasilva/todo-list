import { useState } from "react";
import { Modal, ModalEdit, OpenModalBtn } from "./styled";
import { useFormsProvider } from "../../hooks/useFormContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  idTask: string;
}

export function ModalButton({ idTask }: Props) {
  const { tasks, setTasks } = useFormsProvider();
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState("");

  const toggleModal = () => {
    setIsModalMenuOpen(!isModalMenuOpen);
  };

  const toggleModalEdit = () => {
    setIsModalMenuOpen(false);
    setIsModalEditOpen(!isModalEditOpen);

    const taskToEdit = tasks.find((task) => task.id === idTask);
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setSelect(taskToEdit.select);
    }
  };

  const closeModalEdit = () => {
    setIsModalEditOpen(false);

    setTitle("");
    setDescription("");
    setSelect("default");
  };

  const handleDelete = () => {
    const updatedTasks = tasks.filter((task) => task.id !== idTask);
    setTasks(updatedTasks);
    toast.success("Tarefa excluída com sucesso!");
  };

  const saveEdit = () => {
    const updatedTask = {
      title: title,
      description: description,
      select: select,
      id: idTask,
    };

    const updatedTasks = tasks.map((task) =>
      task.id === idTask ? updatedTask : task
    );
    setTasks(updatedTasks);

    toast.success("Tarefa editada com sucesso!");
    setIsModalEditOpen(false);
  };

  return (
    <OpenModalBtn>
      <button className="openModalBtn" onClick={toggleModal}>
        <span className="material-symbols-outlined">more_horiz</span>
      </button>

      {isModalMenuOpen && (
        <Modal>
          <button onClick={toggleModalEdit} className="edit">
            Editar
          </button>
          <button onClick={handleDelete} className="delete">
            Excluir
          </button>
        </Modal>
      )}
      {isModalEditOpen && (
        <ModalEdit>
          <div className="headerModal">
            <h1>Edição:</h1>
          </div>

          <input
            value={title}
            type="text"
            placeholder="Digite o titulo da tarefa"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            value={description}
            type="text"
            placeholder="Digite a descrição da tarefa"
            onChange={(e) => setDescription(e.target.value)}
          />

          <select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option disabled value="default">
              Selecione um nivel
            </option>
            <option value="Baixo">Baixo</option>
            <option value="Médio">Médio</option>
            <option value="Alto">Alto</option>
          </select>

          <div>
            <button onClick={saveEdit} className="Edit">
              Salvar Edição
            </button>
            <button onClick={closeModalEdit} className="cancelar">
              Cancelar
            </button>
          </div>
        </ModalEdit>
      )}
    </OpenModalBtn>
  );
}
