import React from "react";
import Remove from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Surface from "./shared/Surface";
import SkillSelector from "./SkillSelector";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 48px",
    alignItems: "center",
  },
});

const EmployeeRow = ({
  skills,
  employee,
  removeEmployee,
  addSkillToEmployee,
  sortEmployeeSkills,
}) => {
  const classes = useStyles();

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
        <div
          style={{ wordBreak: "break-word", flexGrow: 1 }}
          style={{ alignSelf: "flex-start", padding: "14px 0px" }}
        >
          {employee.firstName}
        </div>
        <div
          style={{ wordBreak: "break-word", flexGrow: 1 }}
          style={{ alignSelf: "flex-start", padding: "14px 0px" }}
        >
          {employee.lastName}
        </div>
        <SkillSelector
          addMultipleSkills={addMultipleSkills(employee.id)}
          skillsSelected={employee.skills}
          skills={skills}
          onSortEnd={onSortEnd(employee.id)}
        />
        <IconButton
          onClick={removeEmployee(employee.id)}
          color="secondary"
          style={{ alignSelf: "flex-start" }}
        >
          <Remove />
        </IconButton>
      </div>
    </Surface>
  );
};

export default EmployeeRow;
