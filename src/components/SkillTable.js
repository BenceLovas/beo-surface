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
            borderBottom: "1px solid rgb(200, 201, 202)",
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
            <TextField
              type="text"
              value={newSkillName}
              onChange={updateSkillNameChange}
              error={newSkillNameError}
              placeholder="Enter a new skill"
              style={{
                flexGrow: 2,
                margin: "4px 5px",
              }}
              variant="outlined"
              className={classes.textInput}
              size="small"
            />
            <TextField
              type="text"
              value={newSkillAbbreviation}
              onChange={updateSkillAbbreviation}
              placeholder="Enter abbreviation"
              style={{
                flexGrow: 1,
                margin: "4px 5px",
              }}
              variant="outlined"
              className={classes.textInput}
              size="small"
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
