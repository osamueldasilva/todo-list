import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

// * NESSE EU PASSO AS FUNÇÕES E OS ESTATOS
interface FormDataType {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  select: string;
  setSelect: (select: string) => void;
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  id: string;
  setId: (id: string) => void;
}

export interface ITask {
  title: string;
  description: string;
  select: string;
  id: string;
}

type IData = {
  children: ReactNode;
};

export const FormData = createContext({} as FormDataType);

export function FormsProvider({ children }: IData) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [select, setSelect] = useState<string>("default");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [id, setId] = useState<string>("");

  return (
    <FormData.Provider
      value={{
        title,
        setTitle,
        description,
        setDescription,
        select,
        setSelect,
        tasks,
        setTasks,
        id,
        setId,
      }}
    >
      {children}
    </FormData.Provider>
  );
}
