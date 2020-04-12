import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import EmployeeRow from "./EmployeeRow";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Collapse from "@material-ui/core/Collapse";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from "@material-ui/core/styles";
import Surface from "./shared/Surface";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 48px",
  },
  textInput: {
    marginTop: 4,
    height: 40,
    borderRadius: 20,
    background: "rgb(240, 242, 245)",
    [`& fieldset`]: {
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

const EmployeeTable = ({
  skills,
  employees,
  addEmployee,
  removeEmployee,
  addSkillToEmployee,
  newFirstName,
  updateFirstNameChange,
  newFirstNameError,
  newLastName,
  updateLastNameChange,
  newLastNameError,
  selectedSkills,
  setSelectedSkills,
  sortEmployeeSkills,
}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ padding: 16, border: "1px solid #eee", boxSizing: "border-box" }}
    >
      <div style={{ fontSize: 20, padding: "15px 0", letterSpacing: 2 }}>
        EMPLOYEES <Chip label={employees.length} />
      </div>
      <div>
        <div
          className={classes.grid}
          style={{
            borderBottom: "1px solid rgb(200, 201, 202)",
            padding: "5px 20px",
            letterSpacing: 0.5,
          }}
        >
          <div style={{ wordBreak: "break-word" }}>First Name</div>
          <div style={{ wordBreak: "break-word" }}>Last Name</div>
          <div style={{ wordBreak: "break-word" }}>Skills</div>
          <div></div>
        </div>

        <Surface>
          <form onSubmit={addEmployee} className={classes.grid}>
            <TextField
              className={classes.textInput}
              type="text"
              value={newFirstName}
              onChange={updateFirstNameChange}
              error={newFirstNameError}
              placeholder={"First Name"}
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.textInput}
              type="text"
              value={newLastName}
              onChange={updateLastNameChange}
              error={newLastNameError}
              placeholder={"Last Name"}
              variant="outlined"
              size="small"
            />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Chip label={selectedSkills.length} />
                <IconButton
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  color="primary"
                >
                  <ExpandMore />
                </IconButton>
              </div>
              <Collapse in={isOpen}>
                <FormControl
                  variant="outlined"
                  style={{ width: "100%", margin: "20px 0" }}
                >
                  <Select
                    multiple
                    value={selectedSkills}
                    onChange={(event) =>
                      setSelectedSkills([...event.target.value])
                    }
                    input={<OutlinedInput />}
                    renderValue={() => "Select Skills"}
                    MenuProps={MenuProps}
                  >
                    {skills.map((skill) => (
                      <MenuItem key={skill.id} value={skill}>
                        <Checkbox
                          checked={selectedSkills.some(
                            (selectedSkill) => selectedSkill.id === skill.id
                          )}
                        />
                        <ListItemText primary={skill.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {selectedSkills.map((skill) => (
                  <Surface>{skill.name}</Surface>
                ))}
              </Collapse>
            </div>

            <IconButton type="submit" color="primary">
              <Add />
            </IconButton>
          </form>
        </Surface>

        {employees.map((employee) => (
          <EmployeeRow
            key={employee.id}
            skills={skills}
            employee={employee}
            removeEmployee={removeEmployee}
            addSkillToEmployee={addSkillToEmployee}
            sortEmployeeSkills={sortEmployeeSkills}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;
