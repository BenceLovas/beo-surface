import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import FormatPaint from "@material-ui/icons/FormatPaint";
import { makeStyles } from "@material-ui/core/styles";
import Surface from "./shared/Surface";
import ColorPicker from "./ColorPicker";
import Slide from "@material-ui/core/Slide";
const useStyles = makeStyles({
  textInput: {
    height: 40,
    borderRadius: 20,
    background: "rgb(240, 242, 245)",
    [`& fieldset`]: {
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
}) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const toggleColorPicker = () => {
    setOpen(!isOpen);
  };

  return (
    <div style={{ padding: 16, border: "1px solid #eee" }}>
      <div style={{ fontSize: 20, padding: "15px 0", letterSpacing: 2 }}>
        SKILLS <Chip label={skills.length} />
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
              placeholder={"Enter a new skill"}
              style={{
                flexGrow: 2,
                marginTop: 4,
              }}
              variant="outlined"
              className={classes.textInput}
              size="small"
            />
            <TextField
              type="text"
              value={newSkillAbbreviation}
              onChange={updateSkillAbbreviation}
              placeholder={"Enter abbreviation"}
              style={{
                flexGrow: 1,
                marginTop: 4,
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
            />

            <IconButton onClick={toggleColorPicker}>
              <FormatPaint />
            </IconButton>
            <IconButton type="submit" color="primary">
              <Add />
            </IconButton>
          </form>
        </Surface>
        {skills.map((skill) => (
          <Surface>
            <div
              key={skill.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                letterSpacing: 0.5,
              }}
            >
              <div style={{ wordBreak: "break-word" }}>{skill.name}</div>
              <Chip
                style={{ background: skill.color }}
                label={skill.abbreviation}
              />
              <IconButton onClick={removeSkill(skill.id)} color="secondary">
                <Remove />
              </IconButton>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
};

export default SkillTable;
