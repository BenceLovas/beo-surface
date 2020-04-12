import React from 'react'
import Add from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import EmployeeRow from './EmployeeRow';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 48px',
  },
  textInput: {
    marginTop: 4,
    height: 40,
    borderRadius: 20,
    background: 'rgb(240, 242, 245)',
    [`& fieldset`]: {
      borderRadius: 20,
    },
  }
})

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
  newLastNameError
}) => {
  const classes = useStyles();

  return (
    <div style={{padding: 16, border: '1px solid #eee', boxSizing: 'border-box'}}>
        <div style={{fontSize: 20, padding: '15px 0', letterSpacing: 2}}>EMPLOYEES <Chip label={employees.length} /></div>
        <div>
          <div className={classes.grid} style={{  borderBottom: '1px solid rgb(200, 201, 202)', padding: '5px 0 5px 20px', letterSpacing: .5,}}>
            <div style={{ wordBreak: 'break-word'}}>First Name</div>
            <div style={{ wordBreak: 'break-word'}}>Last Name</div>
            <div style={{ wordBreak: 'break-word'}}>Skills</div>
            <div></div>
          </div>

          <form onSubmit={addEmployee} className={classes.grid} style={{
            borderRadius: 8, 
            marginTop: 10, 
            padding: '5px 16px', 
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
            backgroundColor: 'rgb(255, 255, 255)',
            }}>
            <TextField className={classes.textInput} type="text" value={newFirstName} onChange={updateFirstNameChange} error={newFirstNameError} placeholder={'First Name'} variant="outlined" size="small"/>
            <TextField className={classes.textInput} type="text" value={newLastName} onChange={updateLastNameChange} error={newLastNameError} placeholder={'Last Name'} variant="outlined" size="small"/>
            <IconButton type="button" onClick={() => {}}><ExpandMore /></IconButton>
            <IconButton type="submit"><Add /></IconButton>
          </form>
          {employees.map(employee => (
            <EmployeeRow key={employee.id} skills={skills} employee={employee} removeEmployee={removeEmployee} addSkillToEmployee={addSkillToEmployee}/>
          ))}
        </div>
      </div>
  )
}

export default EmployeeTable;