import React from 'react';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textInput: {
    height: 40,
    borderRadius: 20,
    background: 'rgb(240, 242, 245)',
    [`& fieldset`]: {
      borderRadius: 20,
    },
  }
})


const SkillTable = ({ 
  skills, 
  addSkill, 
  removeSkill, 
  newSkillName, 
  updateSkillNameChange, 
  newSkillNameError,
}) => {
  const classes = useStyles();

  return (
      <div style={{padding: 16, border: '1px solid #eee'}}>
        <div style={{fontSize: 20, padding: '15px 0', letterSpacing: 2}}>SKILLS <Chip label={skills.length} /></div>
        <div>
          <div style={{ borderBottom: '1px solid rgb(200, 201, 202)', padding: '5px 0 5px 20px', letterSpacing: .5, }}>Name</div>
          <form onSubmit={addSkill} style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItesm: 'center',
            borderRadius: 8, 
            marginTop: 10, 
            padding: '5px 16px', 
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
            backgroundColor: 'rgb(255, 255, 255)',
            }}
          >
            <TextField 
              type="text" 
              value={newSkillName} 
              onChange={updateSkillNameChange} 
              error={newSkillNameError} 
              placeholder={'Enter a new skill'} 
              style={{
                flexGrow: 1,
                marginTop: 4,
              }}
              variant="outlined"
              className={classes.textInput}
              size="small"
        
            />
            <IconButton type="submit"><Add /></IconButton>
          </form>
          {skills.map(skill => (
            <div key={skill.id} style={{
              display: 'flex',
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderRadius: 8, 
              marginTop: 10, 
              padding: '0 20px', 
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
              backgroundColor: 'rgb(255, 255, 255)',
              letterSpacing: .5,
              }}
            >
              <div style={{ wordBreak: 'break-word'}}>{skill.name}</div>
              <IconButton onClick={removeSkill(skill.id)}><Remove /></IconButton>
            </div>
          ))}
        </div>
      </div>
  )
}

export default SkillTable;