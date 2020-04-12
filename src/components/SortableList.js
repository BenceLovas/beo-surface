import React, { useState } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import Surface from "./shared/Surface";

const SortableItem = sortableElement(({ value }) => (
  <Surface>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ borderRight: "1px solid #bbb", padding: "0px 16px" }}>
        {value.index + 1}
      </div>
      <div style={{ padding: "10px 20px", flexGrow: 1 }}>{value.name}</div>
      <div
        style={{
          display: "flex",
          width: 30,
          height: 30,
          flexDirection: "column",
        }}
      >
        {Array(3)
          .fill()
          .map(() => (
            <div
              style={{ width: 30, height: 30, background: "#ddd", margin: 3 }}
            ></div>
          ))}
      </div>
    </div>
  </Surface>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

const SortableList = ({ items, onSortEnd }) => {
  return (
    <SortableContainer onSortEnd={onSortEnd}>
      {items.map((value, index) => {
        value.index = index;
        return (
          <SortableItem key={`item-${value.id}`} index={index} value={value} />
        );
      })}
    </SortableContainer>
  );
};

export default SortableList;