import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SkillTable from "./components/SkillTable";
import EmployeeTable from "./components/EmployeeTable";
import arrayMove from "array-move";

const colors = [
  {
    background: "#F27312",
    text: "#1c1e21",
  },
  {
    background: "#F48D13",
    text: "#1c1e21",
  },
  {
    background: "#F0C213",
    text: "#1c1e21",
  },
  {
    background: "#439975",
    text: "#fff",
  },
  {
    background: "#1A3D48",
    text: "#fff",
  },
];
const defaultColor = "#F48D13";

function App() {
  const [skills, setSkills] = useState([
    { name: "Skill 1", id: uuidv4(), color: colors[0], abbreviation: "S1" },
    { name: "Skill 2", id: uuidv4(), color: colors[1], abbreviation: "S2" },
  ]);

  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillNameError, setNewSkillNameError] = useState(false);
  const [newSkillAbbreviation, setNewSkillAbbreviation] = useState("");
  const [employees, setEmployees] = useState([
    { firstName: "Aladár", lastName: "Kis", id: uuidv4(), skills: [] },
    { firstName: "Pista", lastName: "Nagy", id: uuidv4(), skills: [] },
  ]);

  const [newFirstName, setNewFirstName] = useState("");
  const [newFirstNameError, setNewFirstNameError] = useState(false);

  const [newLastName, setNewLastName] = useState("");
  const [newLastNameError, setNewLastNameError] = useState(false);

  const [selectedSkills, setSelectedSkills] = useState([]);

  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const addSkill = (event) => {
    event.preventDefault();
    if (newSkillName.trim() === "") {
      setNewSkillNameError(true);
      return;
    }
    setSkills([
      {
        name: newSkillName.trim(),
        id: uuidv4(),
        color: colors.find((color) => selectedColor === color.background),
        abbreviation: newSkillAbbreviation,
      },
      ...skills,
    ]);
    setSelectedColor(defaultColor);
    setNewSkillName("");
    setNewSkillAbbreviation("");
  };

  const removeSkill = (id) => () => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const updateSkillAbbreviation = (event) => {
    setNewSkillAbbreviation(event.target.value);
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
    // set focus for first name
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
        } else {
          return employee;
        }
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
        } else {
          return employee;
        }
      })
    );
  };
  return (
    <div style={{ padding: 10 }}>
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
      />
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
    </div>
  );
}

export default App;
