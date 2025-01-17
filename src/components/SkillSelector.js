import React, { useState } from "react";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Collapse from "@material-ui/core/Collapse";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import SortableList from "./SortableList";
import Label from "./shared/Label";

const useStyles = makeStyles({
  textInput: {
    marginTop: 4,
    height: 40,
    borderRadius: 20,
    background: "rgb(240, 242, 245)",
    "& fieldset": {
      borderRadius: 20,
    },
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SkillSelector = ({
  skillsSelected,
  skills,
  addMultipleSkills,
  onSortEnd,
}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconButton
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            transition: "transform .3s ease-in-out",
            transform: isOpen ? "rotate(180deg)" : "",
          }}
        >
          <ExpandMore />
        </IconButton>
        <div style={{ display: "flex" }}>
          {skillsSelected.map((skill) => (
            <Label
              text={skill.abbreviation}
              color={skill.color.text}
              background={skill.color.background}
            />
          ))}
        </div>
      </div>
      <Collapse in={isOpen}>
        <FormControl
          variant="outlined"
          style={{ width: "100%", margin: "20px 0" }}
          size="small"
        >
          <Select
            className={classes.textInput}
            multiple
            value={skillsSelected.length ? skillsSelected : []}
            onChange={addMultipleSkills}
            input={<OutlinedInput name="age" id="outlined-age-simple" />}
            renderValue={() => "Select Skills"}
            MenuProps={MenuProps}
          >
            {skills.map((skill) => (
              <MenuItem key={skill.id} value={skill}>
                <Checkbox
                  checked={skillsSelected.some(
                    (skillSelected) => skillSelected.id === skill.id
                  )}
                />
                <ListItemText primary={skill.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {skillsSelected.length > 0 && <div>RANKING</div>}
        <SortableList items={skillsSelected} onSortEnd={onSortEnd} />
      </Collapse>
    </div>
  );
};

export default SkillSelector;
