import React, { useState, useEffect } from "react";
import Remove from "@material-ui/icons/Remove";
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
import Surface from "./shared/Surface";
import SortableList from "./SortableList";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 48px",
    alignItems: "center",
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

const EmployeeRow = ({
  skills,
  employee,
  removeEmployee,
  addSkillToEmployee,
  sortEmployeeSkills,
}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const addMultipleSkills = (employeeId) => (event) => {
    const {
      target: { value },
    } = event;
    addSkillToEmployee(employeeId, value);
  };

  const onSortEnd = (employeeId) => ({ oldIndex, newIndex }) => {
    sortEmployeeSkills(employeeId, oldIndex, newIndex);
  };

  return (
    <Surface>
      <div key={employee.id} className={classes.grid}>
        <div style={{ wordBreak: "break-word", flexGrow: 1 }}>
          {employee.firstName}
        </div>
        <div style={{ wordBreak: "break-word", flexGrow: 1 }}>
          {employee.lastName}
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Chip label={employee.skills.length} />
            <IconButton
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              color="primary"
              style={{
                transition: "transform .3s ease-in-out",
                transform: isOpen ? "rotate(180deg)" : "",
              }}
            >
              <ExpandMore />
            </IconButton>
          </div>
          <Collapse in={isOpen}>
            <FormControl
              variant="outlined"
              style={{ width: "100%", margin: "20px 0" }}
              size="small"
            >
              <Select
                multiple
                value={employee.skills.length ? employee.skills : []}
                onChange={addMultipleSkills(employee.id)}
                input={<OutlinedInput name="age" id="outlined-age-simple" />}
                renderValue={() => "Select Skills"}
                MenuProps={MenuProps}
              >
                {skills.map(
                  (skill) =>
                    console.log({ skill }) || (
                      <MenuItem key={skill.id} value={skill}>
                        <Checkbox
                          checked={employee.skills.some(
                            (employeeSkill) => employeeSkill.id === skill.id
                          )}
                        />
                        <ListItemText primary={skill.name} />
                      </MenuItem>
                    )
                )}
              </Select>
            </FormControl>
            <div>RANKING</div>
            <SortableList
              items={employee.skills}
              onSortEnd={onSortEnd(employee.id)}
            />
          </Collapse>
        </div>
        <IconButton onClick={removeEmployee(employee.id)} color="primary">
          <Remove />
        </IconButton>
      </div>
    </Surface>
  );
};

export default EmployeeRow;
