import React, { useState } from "react";
import Surface from "./shared/Surface";
import { Collapse } from "@material-ui/core";
import Remove from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";

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
            <Chip
              style={{
                background: skill.color.background,
                color: skill.color.text,
              }}
              label={skill.abbreviation}
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
