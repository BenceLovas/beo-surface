import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SkillTable from "./components/SkillTable";
import EmployeeTable from "./components/EmployeeTable";
import arrayMove from "array-move";

const colors = ["#F27312", "#F48D13", "#F0C213", "#439975", "#1A3D48"];
const defaultColor = "#F48D13";

function App() {
  const [skills, setSkills] = useState([
    { name: "Skill 1", id: uuidv4(), color: "#F27312" },
    { name: "Skill 2", id: uuidv4(), color: "#F48D13" },
  ]);

  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillNameError, setNewSkillNameError] = useState(false);

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
      { name: newSkillName.trim(), id: uuidv4(), color: selectedColor },
      ...skills,
    ]);
    setSelectedColor(defaultColor);
    setNewSkillName("");
  };

  const removeSkill = (id) => () => {
    setSkills(skills.filter((skill) => skill.id !== id));
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
