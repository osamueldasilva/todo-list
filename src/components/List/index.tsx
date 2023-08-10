import { Paragraph } from "./style";
import { ITask } from "../../context/FormContext";
import { ModalButton } from "../Modal/index";

interface ListProps {
  data: ITask
}
export function List({data}: ListProps) {
  return (
    <Paragraph>
      <div className="content">
        <div className="contentHeader">
          <h4 className="title">{data.title}</h4>
          <h4 className="select">{data.select}</h4>
          <ModalButton idTask={data.id} />
          {/* <button>
            <span className="material-symbols-outlined">more_horiz</span>
          </button> */}
        </div>
        <p>{data.description}</p>
      </div>
    </Paragraph>
  );
}
