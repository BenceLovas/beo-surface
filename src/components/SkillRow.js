import React, { useState } from "react";
import Surface from "./shared/Surface";
import { Collapse } from "@material-ui/core";
import Remove from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Label from "./shared/Label";

const SkillRow = ({ removeSkill, skill }) => {
  const [show, setShow] = useState(true);
  const onRemove = () => () => {
    const delSkill = removeSkill(skill.id);
    setTimeout(delSkill, 300);
    setShow(false);
  };

  return (
    <Collapse in={show} timeout={300}>
      <Surface>
        <div style={{ display: "flex" }}>
          <div
            key={skill.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              letterSpacing: 0.5,
              flexGrow: 1,
            }}
          >
            <div style={{ wordBreak: "break-word" }}>{skill.name}</div>
            <Label
              text={skill.abbreviation}
              color={skill.color.text}
              background={skill.color.background}
            />
          </div>
          <IconButton onClick={onRemove()} color="secondary">
            <Remove />
          </IconButton>
        </div>
      </Surface>
    </Collapse>
  );
};

export default SkillRow;
