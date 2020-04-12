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
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 48px',
    borderRadius: 8, 
    marginTop: 10, 
    padding: '5px 20px', 
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
  }
})

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
  addSkillToEmployee
}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const addMultipleSkills = (employeeId) => (event) => {
    const { target: { value }} = event;
    addSkillToEmployee(employeeId, value)
  }
  
  return (
    <div>
      <div key={employee.id} className={classes.grid}>
        <div style={{ wordBreak: 'break-word', flexGrow: 1}}>{employee.firstName}</div>
        <div style={{ wordBreak: 'break-word', flexGrow: 1}}>{employee.lastName}</div>
        <div style={{
          flexGrow: 1,
          borderRadius: 30, 
          padding: '5px 16px', 
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
          backgroundColor: 'rgb(255, 255, 255)',
      }}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Chip label={employee.skills.length} />
            <IconButton type="button" onClick={() => setIsOpen(!isOpen)}><ExpandMore /></IconButton>
          </div>
          <Collapse in={isOpen}>
            <FormControl variant="outlined" style={{ width: '100%', margin: '20px 0'}}>
              <Select
                multiple
                value={employee.skills.length ? employee.skills : []}
                onChange={addMultipleSkills(employee.id)}
                input={<OutlinedInput
                    name="age"
                    id="outlined-age-simple"
                  /> }
                renderValue={() => 'Select Skills'}
                MenuProps={MenuProps}
              >
                {skills.map((skill) => (console.log({skill}) ||
                  <MenuItem key={skill.id} value={skill}>
                    <Checkbox checked={employee.skills.some(employeeSkill => employeeSkill.id === skill.id)} />
                    <ListItemText primary={skill.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {employee.skills.map(skill => (
              <div style={{
                margin: '4px 0px',
                borderRadius: 8, 
                padding: '16px 16px', 
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
                backgroundColor: 'rgb(255, 255, 255)',
              }}>{skill.name}</div>
            ))}
          </Collapse>
        </div>
        <IconButton onClick={removeEmployee(employee.id)}><Remove /></IconButton>
      </div>
    </div>
  )
}

export default EmployeeRow;