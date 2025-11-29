import { Draggable, Droppable } from "@hello-pangea/dnd";
import Card from "./Card";
import PropTypes from "prop-types";

const Column = (props) => {
  const { label, cards, columnId } = props;
  console.log("co", columnId);
  return (
    <div className="flex flex-col h-full w-[318px] bg-background-200 rounded-xl shadow-sm">
      {/* HEADER */}
      <div className="font-primary bg-background-200 p-4 flex items-center justify-between font-medium rounded-t-xl border-b-2 border-[#e1edff]">
        <h3 className="text-lg">{label}</h3>
        <div className="bg-background-300 text-sm px-4 py-2 space-x-1 rounded-md">
          <span>{"1"}</span>
          <span>{"Jobs"}</span>
        </div>
      </div>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            className="flex-1 bg-[radial-gradient(#bfd4ff_3px,transparent_3px)] bg-size-[22px_22px] p-4 rounded-xl space-y-3"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards?.map((card, index) => (
              <Draggable key={card._id} draggableId={card._id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card data={card} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

Column.propTypes = {
  label: PropTypes.string,
  cards: PropTypes.array,
  columnId: PropTypes.string,
};

export default Column;
