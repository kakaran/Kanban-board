import BorderHeader from "../../component/board/BoardHeader";
import BordTable from "../../component/board/BoardTable";

const KanbanBoard = () => {
  return (
    <div className="flex flex-col h-screen p-2.5 overflow-hidden">
      <BorderHeader />
      <BordTable/>
    </div>
  );
};

export default KanbanBoard;
