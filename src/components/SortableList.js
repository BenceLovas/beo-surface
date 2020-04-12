import React, { useState } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import Surface from "./shared/Surface";

const SortableItem = sortableElement(({ value }) => (
  <Surface>{value.name}</Surface>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

const SortableList = ({ items, onSortEnd }) => {
  return (
    <SortableContainer onSortEnd={onSortEnd}>
      {items.map((value, index) => (
        <SortableItem key={`item-${value.id}`} index={index} value={value} />
      ))}
    </SortableContainer>
  );
};

export default SortableList;
