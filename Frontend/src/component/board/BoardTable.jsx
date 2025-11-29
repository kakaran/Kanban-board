import Column from "./Column";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useSelector } from "react-redux";

const BordTable = () => {
  const { data } = useSelector((state) => state.board);
  const handleDragEnd = (result) => {
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="font-primary rounded-b-2xl border-stroke-100 border bg-background-100 p-3 flex-1 border-t-0 overflow-x-auto gap-2  flex ">
        <div className="flex gap-2 ">
          {data?.columns?.map((column, index) => (
            <Column
              key={index}
              label={column?.title}
              cards={column?.cards}
              columnId={column?._id}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default BordTable;
