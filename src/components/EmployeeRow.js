import React, {useState, useEffect} from 'react'
import Remove from '@material-ui/icons/Remove';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 48px',
    borderRadius: 8, 
    marginTop: 10, 
    padding: '5px 16px', 
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
    backgroundColor: 'rgb(255, 255, 255)',
  }
})

const EmployeeRow = ({
  skills,
  employee,
  removeEmployee,
  addSkillToEmployee
}) => {
  const classes = useStyles();


  const getUnownedSkillsOfEmployee = () => {
    const unownedSkills = [];
    for (let i = 0; i < skills.length; i++) {
      let doesEmployeeKnowThisSkill = false;
      for (let j = 0; j < employee.skills.length; j++) {
        if (skills[i].id === employee.skills[j].id) {
          doesEmployeeKnowThisSkill = true;
        }
      }
      if (!doesEmployeeKnowThisSkill) {
        unownedSkills.push(skills[i])
      } 
    }
    return unownedSkills;
  }
  const [isOpen, setIsOpen] = useState(false);

  const addSkill = (employeeId) => (event) => {
    const skill = event.target.value;
    addSkillToEmployee(employeeId, skill)
  }

  return (
    <div>
      <div key={employee.id} className={classes.grid}>
        <div style={{ wordBreak: 'break-word', flexGrow: 1}}>{employee.firstName}</div>
        <div style={{ wordBreak: 'break-word', flexGrow: 1}}>{employee.lastName}</div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1,     borderRadius: 30, 
    padding: '5px 16px', 
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
    backgroundColor: 'rgb(255, 255, 255)',}}>
          <Chip label={employee.skills.length} />
          <IconButton type="button" onClick={() => setIsOpen(!isOpen)}><ExpandMore /></IconButton>
        </div>
        <IconButton onClick={removeEmployee(employee.id)}><Remove /></IconButton>
      </div>
      <Collapse in={isOpen}>
        <FormControl style={{ width: '100%'}}>
          <InputLabel>Add Skill</InputLabel>
          <Select
            onChange={addSkill(employee.id)}
          >
            {getUnownedSkillsOfEmployee().map(skill => (
              <MenuItem value={skill} key={skill.id}>{skill.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {employee.skills.map(skill => (
          <div>{skill.name}</div>
        ))}
      </Collapse>
    </div>
  )
}

export default EmployeeRow;