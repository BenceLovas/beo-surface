import React, { useState } from "react";
import Done from "@material-ui/icons/Done";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import FormatPaint from "@material-ui/icons/FormatPaint";
import { makeStyles } from "@material-ui/core/styles";
import Surface from "./shared/Surface";
import ColorPicker from "./ColorPicker";
import SkillRow from "./SkillRow";
import InputText from "./shared/InputText";
import Fab from "@material-ui/core/Fab";
import ActionButtonCircle from "./shared/ActionButtonCircle";
const useStyles = makeStyles({
  textInput: {
    height: 40,
    borderRadius: 20,
    background: "rgb(240, 242, 245)",
    "& fieldset": {
      borderRadius: 20,
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 48px 48px",
    alignItems: "center",
  },
});

const SkillTable = ({
  skills,
  addSkill,
  removeSkill,
  newSkillName,
  updateSkillNameChange,
  newSkillNameError,
  selectedColor,
  setSelectedColor,
  colors,
  newSkillAbbreviation,
  newSkillAbbreviationError,
  updateSkillAbbreviation,
  selectedColors,
}) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const toggleColorPicker = () => {
    setOpen(!isOpen);
  };

  return (
    <div style={{ padding: 16 }}>
      <div
        style={{
          fontSize: 20,
          letterSpacing: 1,
          padding: "0 20px",
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        SKILLS ({skills.length})
      </div>
      <div>
        <div
          style={{
            padding: "5px 0 5px 20px",
            letterSpacing: 0.5,
            display: "flex",
            justifyContent: "space-between",
            height: 32,
            alignItems: "flex-end",
          }}
        >
          <div>Name</div>
          <ColorPicker
            isOpen={isOpen}
            selectedValue={selectedColor}
            setSelectedValue={setSelectedColor}
            colors={colors}
            selectedColors={selectedColors}
          />
        </div>
        <Surface>
          <form onSubmit={addSkill} className={classes.grid}>
            <InputText
              value={newSkillName}
              onChange={updateSkillNameChange}
              error={newSkillNameError}
              placeholder="Enter a new skill"
            />
            <InputText
              value={newSkillAbbreviation}
              onChange={updateSkillAbbreviation}
              error={newSkillAbbreviationError}
              placeholder="Enter abbreviation"
            />
            <IconButton onClick={toggleColorPicker}>
              <FormatPaint />
            </IconButton>
            <ActionButtonCircle icon={<Done />} />
          </form>
        </Surface>
        {skills.map((skill) => (
          <SkillRow removeSkill={removeSkill} skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
};

export default SkillTable;
