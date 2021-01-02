import React, {Component, useState, useEffect} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
// import {makeStyles} from '@material-ui/core/styles'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import UseStyles from './../styles'

export default function Signup() {
  const classes = UseStyles()
    const [values, setValue] = useState({
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    })

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        }
        create(user).then((data) => {
            if(data.error){
                setValues({...values, error: data.error})
            } else{
                setValues({...values, error: '', open: true})
            }
        })
    }

    return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Sign Up
          </Typography>
          <TextField id="name" label="Name" 
             className={classes.textField} 
             value={values.name} onChange={handleChange('name')} 
             margin="normal"/>
          <br/>
          <TextField id="email" type="email" label="Email" 
             className={classes.textField} 
             value={values.email} onChange={handleChange('email')} 
             margin="normal"/>
          <br/>
          <TextField id="password" type="password" label="Password" 
             className={classes.textField} value={values.password} 
             onChange={handleChange('password')} margin="normal"/>
          <br/> 
          {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} 
            className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
    </div>
    )

}