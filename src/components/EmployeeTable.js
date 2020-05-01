import React from "react";
import Done from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import arrayMove from "array-move";
import EmployeeRow from "./EmployeeRow";
import SkillSelector from "./SkillSelector";
import InputText from "./shared/InputText";

import Surface from "./shared/Surface";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 48px",
  },
  textInput: {
    margin: "4px 10px 4px 0",
    boxSizing: "border-box",
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
    <div style={{ padding: 16, boxSizing: "border-box" }}>
      <div
        style={{
          fontSize: 20,
          letterSpacing: 1,
          padding: "0 20px",
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        EMPLOYEES ({employees.length})
      </div>
      <div>
        <div
          className={classes.grid}
          style={{
            padding: "5px 20px",
            letterSpacing: 0.5,
            height: 32,
            alignItems: "flex-end",
          }}
        >
          <div style={{ wordBreak: "break-word" }}>First Name</div>
          <div style={{ wordBreak: "break-word" }}>Last Name</div>
          <div style={{ wordBreak: "break-word" }}>Skills</div>
          <div />
        </div>

        <Surface>
          <form onSubmit={addEmployee} className={classes.grid}>
            <InputText
              value={newFirstName}
              onChange={updateFirstNameChange}
              error={newFirstNameError}
              placeholder="Enter first name"
            />
            <InputText
              value={newLastName}
              onChange={updateLastNameChange}
              error={newLastNameError}
              placeholder="Enter last name"
            />
            <SkillSelector
              addMultipleSkills={(e) => setSelectedSkills([...e.target.value])}
              skillsSelected={selectedSkills}
              skills={skills}
              onSortEnd={onSortEnd}
            />
            <IconButton
              type="submit"
              color="primary"
              style={{ alignSelf: "flex-start" }}
            >
              <Done />
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
