import { useEffect } from "react";
import { StyleMain } from "./styled";
import { Form } from "../Forms";
import { List } from "../List";
import { useFormsProvider } from "../../hooks/useFormContext";

export function Container() {
  const { tasks, setTasks } = useFormsProvider();

  const dummyTasks = [
    { id: "1", title: "Tarefa nº1", description: "Description nº1", select: "Baixo" },
  ];

  useEffect(() => {
    setTasks(dummyTasks);
  }, [setTasks]);

  return (
    <>
      <StyleMain>
        <h2>Oque pretende fazer?</h2>
        <Form />

        {tasks.length ? (
          <>
            <h2>Suas tarefas:</h2>
            {tasks.map((task) => (
              <List key={task.id} data={task} />
            ))}
          </>
        ) : (
          <h2>Não tem tarefas cadastradas</h2>
        )}
      </StyleMain>
    </>
  );
}
