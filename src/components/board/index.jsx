import React, { useState } from "react";
import "./board.scss";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import Card from "../card";

const Board = () => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destCol = data[destColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destColIndex].tasks = destinationTask;

      setData(data);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="board__section"
                ref={provided.innerRef}
              >
                <div className="board__section__title">{section.title}</div>
                <div className="board__section__content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <Card>{task.title}</Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
