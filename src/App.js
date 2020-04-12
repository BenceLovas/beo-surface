import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import SkillTable from './components/SkillTable';
import EmployeeTable from './components/EmployeeTable';

function App() {
  const [skills, setSkills] = useState([
    { name: 'Skill 1', id: uuidv4(),}, 
    { name: 'Skill 2', id: uuidv4(),},
  ]);

  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillNameError, setNewSkillNameError] = useState(false);
  
  const [employees, setEmployees] = useState([{firstName: 'Aladár', lastName: 'Kis', id: uuidv4(), skills: []}])

  const [newFirstName, setNewFirstName] = useState('')
  const [newFirstNameError, setNewFirstNameError] = useState(false);

  const [newLastName, setNewLastName] = useState('')
  const [newLastNameError, setNewLastNameError] = useState(false);

  const addSkill = event => {
    event.preventDefault();
    if (newSkillName.trim() === '') {
      setNewSkillNameError(true);
      return;
    }
    setSkills([{ name: newSkillName.trim(), id: uuidv4(), }, ...skills])
    setNewSkillName('');
  }

  const removeSkill = (id) => () => {
    setSkills(skills.filter(skill => skill.id !== id))
  }

  
  const addEmployee = event => {
    event.preventDefault();
    if (newFirstName.trim() === '') {
      setNewFirstNameError(true);
    }
    if (newLastName.trim() === '') {
      setNewLastNameError(true)
    }
    if (newFirstName.trim() === '' || newLastName.trim() === '') return;
    setEmployees([{firstName: newFirstName.trim(), lastName: newLastName.trim(), id: uuidv4(), skills: []}, ...employees])
    setNewFirstName('')
    setNewLastName('')
    // set focus for first name
  }

  const removeEmployee = (id) => () => {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const updateSkillNameChange = (event) => {
    const skillName = event.target.value;
    if (newSkillNameError && skillName.trim() !== '') {
      setNewSkillNameError(false)
    }
    setNewSkillName(skillName);
  }

  const updateFirstNameChange = (event) => {
    const firstName = event.target.value;
    if (newFirstNameError && firstName.trim() !== '') {
      setNewFirstNameError(false)
    }
    setNewFirstName(firstName);
  }

  const updateLastNameChange = (event) => {
    const lastName = event.target.value;
    if (newLastNameError && lastName.trim() !== '') {
      setNewLastNameError(false)
    }
    setNewLastName(lastName);
  }

  const addSkillToEmployee = (employeeId, skill) => {
    setEmployees(employees.map(employee => {
      if (employee.id === employeeId) {
        return {
          ...employee,
          skills: [...employee.skills, skill]
        }
      } else {
        return employee;
      }
    }))
  }

  return (
    <div style={{ padding: 10}}>      
      <SkillTable 
        skills={skills} 
        addSkill={addSkill} 
        removeSkill={removeSkill} 
        newSkillName={newSkillName} 
        updateSkillNameChange={updateSkillNameChange} 
        newSkillNameError={newSkillNameError}
      />
      <EmployeeTable 
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
