import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import arrayMove from "array-move";
import SkillTable from "./components/SkillTable";
import EmployeeTable from "./components/EmployeeTable";
import Divider from "./components/shared/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import DateRangeSelector from "./components/DateRangeSelector";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: theme.background,
    color: theme.textColor,
    minHeight: "100vh",
  },
}));

const colors = [
  {
    background: "#c79d3a",
    text: "#1c1e21",
  },
  {
    background: "#FF4B68",
    text: "#1c1e21",
  },
  {
    background: "#118DF0",
    text: "#1c1e21",
  },
  {
    background: "#004182",
    text: "#fff",
  },
  {
    background: "#1A3D48",
    text: "#fff",
  },
];

function App({ theme, toggleTheme }) {
  const classes = useStyles();
  const [skills, setSkills] = useState([
    {
      name: "Skill 1",
      id: uuidv4(),
      color: colors[0],
      abbreviation: "S1",
    },
    {
      name: "Skill 2",
      id: uuidv4(),
      color: colors[1],
      abbreviation: "S2",
    },
  ]);

  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillNameError, setNewSkillNameError] = useState(false);
  const [newSkillAbbreviation, setNewSkillAbbreviation] = useState("");
  const [employees, setEmployees] = useState([
    {
      firstName: "Aladár",
      lastName: "Kis",
      id: uuidv4(),
      skills: [],
    },
    {
      firstName: "Pista",
      lastName: "Nagy",
      id: uuidv4(),
      skills: [],
    },
  ]);

  const [newFirstName, setNewFirstName] = useState("");
  const [newFirstNameError, setNewFirstNameError] = useState(false);

  const [newLastName, setNewLastName] = useState("");
  const [newLastNameError, setNewLastNameError] = useState(false);

  const [newSkillAbbreviationError, setNewSkillAbbreviationError] = useState(
    false
  );

  const [selectedSkills, setSelectedSkills] = useState([]);

  const [selectedColors, setSelectedColors] = useState(
    skills.map((skill) => skill.color.background)
  );
  const [selectedColor, setSelectedColor] = useState(
    colors.filter((color) => !selectedColors.includes(color.background))[0]
      .background
  );

  useEffect(() => {
    setSelectedColor(
      colors.filter((color) => !selectedColors.includes(color.background))[0]
        .background
    );
  }, [selectedColors]);

  useEffect(() => {
    setSelectedColors(skills.map((skill) => skill.color.background));
  }, [skills]);

  const addSkill = (event) => {
    event.preventDefault();
    if (newSkillName.trim() === "") {
      setNewSkillNameError(true);
    }
    if (newSkillAbbreviation.trim() === "") {
      setNewSkillAbbreviationError(true);
    }
    if (newSkillName.trim() === "" || newSkillAbbreviation.trim() === "")
      return;
    setSkills([
      {
        name: newSkillName.trim(),
        id: uuidv4(),
        color: colors.find((color) => selectedColor === color.background),
        abbreviation: newSkillAbbreviation,
      },
      ...skills,
    ]);
    setNewSkillName("");
    setNewSkillAbbreviation("");
  };

  const removeSkill = (id) => () => {
    setSkills(skills.filter((skill) => skill.id !== id));
    setEmployees(
      employees.map((employee) => {
        return {
          ...employee,
          skills: employee.skills.filter((skill) => skill.id !== id),
        };
      })
    );
  };

  const updateSkillAbbreviation = (event) => {
    const skillAbbreviationName = event.target.value;
    if (newSkillAbbreviationError && skillAbbreviationName.trim() !== "") {
      setNewSkillAbbreviationError(false);
    }
    setNewSkillAbbreviation(skillAbbreviationName);
  };

  const addEmployee = (event) => {
    event.preventDefault();
    if (newFirstName.trim() === "") {
      setNewFirstNameError(true);
    }
    if (newLastName.trim() === "") {
      setNewLastNameError(true);
    }
    if (newFirstName.trim() === "" || newLastName.trim() === "") return;
    setEmployees([
      {
        firstName: newFirstName.trim(),
        lastName: newLastName.trim(),
        id: uuidv4(),
        skills: selectedSkills,
      },
      ...employees,
    ]);
    setNewFirstName("");
    setNewLastName("");
    setSelectedSkills([]);
    // TODO: set focus for first name
  };

  const removeEmployee = (id) => () => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const updateSkillNameChange = (event) => {
    const skillName = event.target.value;
    if (newSkillNameError && skillName.trim() !== "") {
      setNewSkillNameError(false);
    }
    setNewSkillName(skillName);
  };

  const updateFirstNameChange = (event) => {
    const firstName = event.target.value;
    if (newFirstNameError && firstName.trim() !== "") {
      setNewFirstNameError(false);
    }
    setNewFirstName(firstName);
  };

  const updateLastNameChange = (event) => {
    const lastName = event.target.value;
    if (newLastNameError && lastName.trim() !== "") {
      setNewLastNameError(false);
    }
    setNewLastName(lastName);
  };

  const addSkillToEmployee = (employeeId, skill) => {
    setEmployees(
      employees.map((employee) => {
        if (employee.id === employeeId) {
          return {
            ...employee,
            skills: [...skill],
          };
        }
        return employee;
      })
    );
  };

  const sortEmployeeSkills = (employeeId, oldIndex, newIndex) => {
    setEmployees(
      employees.map((employee) => {
        if (employee.id === employeeId) {
          return {
            ...employee,
            skills: arrayMove(employee.skills, oldIndex, newIndex),
          };
        }
        return employee;
      })
    );
  };
  return (
    <div className={classes.wrapper}>
      <Switch checked={theme === "light"} onChange={toggleTheme} />
      <SkillTable
        newSkillAbbreviation={newSkillAbbreviation}
        updateSkillAbbreviation={updateSkillAbbreviation}
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        skills={skills}
        addSkill={addSkill}
        removeSkill={removeSkill}
        newSkillName={newSkillName}
        updateSkillNameChange={updateSkillNameChange}
        newSkillNameError={newSkillNameError}
        selectedColors={selectedColors}
        newSkillAbbreviationError={newSkillAbbreviationError}
      />
      <Divider />
      <EmployeeTable
        sortEmployeeSkills={sortEmployeeSkills}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
        skills={skills}
        employees={employees}
        addEmployee={addEmployee}
        removeEmployee={removeEmployee}
        addSkillToEmployee={addSkillToEmployee}
        newFirstName={newFirstName}
        updateFirstNameChange={updateFirstNameChange}
        newFirstNameError={newFirstNameError}
        newLastName={newLastName}
        updateLastNameChange={updateLastNameChange}
        newLastNameError={newLastNameError}
      />
      <Divider />
      <DateRangeSelector />
    </div>
  );
}

export default App;
