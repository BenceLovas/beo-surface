import React from "react";
import Add from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import arrayMove from "array-move";
import EmployeeRow from "./EmployeeRow";
import SkillSelector from "./SkillSelector";

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
    "& fieldset": {
      borderRadius: 20,
    },
  },
});

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

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setSelectedSkills(arrayMove(selectedSkills, oldIndex, newIndex));
  };

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
          <div />
        </div>

        <Surface>
          <form onSubmit={addEmployee} className={classes.grid}>
            <TextField
              className={classes.textInput}
              type="text"
              value={newFirstName}
              onChange={updateFirstNameChange}
              error={newFirstNameError}
              placeholder="First Name"
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.textInput}
              type="text"
              value={newLastName}
              onChange={updateLastNameChange}
              error={newLastNameError}
              placeholder="Last Name"
              variant="outlined"
              size="small"
            />
            <SkillSelector
              addMultipleSkills={(e) => setSelectedSkills([...e.target.value])}
              skillsSelected={selectedSkills}
              skills={skills}
              onSortEnd={onSortEnd}
            />
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
