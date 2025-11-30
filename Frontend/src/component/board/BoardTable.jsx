import Column from "./Column";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useDispatch, useSelector } from "react-redux";
import { moveCard } from "../../features/board/boardSlice";
import PropTypes from "prop-types";

const BordTable = (props) => {
  const { popOpenMethod } = props;
  const { data } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    dispatch(
      moveCard({
        cardId: draggableId,
        sourceCol: source.droppableId,
        destCol: destination.droppableId,
        sourceIndex: source.index,
        destIndex: destination.index,
      })
    );
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
              popOpenMethod={popOpenMethod}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

BordTable.propTypes = {
  popOpenMethod: PropTypes.func,
};


export default BordTable;
