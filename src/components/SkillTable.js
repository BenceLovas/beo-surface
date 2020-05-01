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

const useStyles = makeStyles({
  textInput: {
    height: 40,
    borderRadius: 20,
    background: "rgb(240, 242, 245)",
    "& fieldset": {
      borderRadius: 20,
    },
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
          marginBottom: 30,
        }}
      >
        SKILLS ({skills.length})
      </div>
      <div>
        <div
          style={{
            padding: "5px 0 5px 20px",
            letterSpacing: 0.5,
          }}
        >
          Name
        </div>
        <Surface>
          <form
            onSubmit={addSkill}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItesm: "center",
            }}
          >
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
            <ColorPicker
              isOpen={isOpen}
              selectedValue={selectedColor}
              setSelectedValue={setSelectedColor}
              colors={colors}
              selectedColors={selectedColors}
            />

            <IconButton onClick={toggleColorPicker}>
              <FormatPaint />
            </IconButton>
            <IconButton type="submit" color="primary">
              <Done />
            </IconButton>
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
