import { SingleBedOutlined } from "@material-ui/icons"
import React, {Component, useState, useEffect} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import auth from './../auth/auth-helper'
import {Redirect} from 'react-router-dom'
import {signin} from './api-auth.js'
import UseStyles from './../styles'


export default function Signin(props){
    const classes = UseStyles()
    const[values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    })

    const handleChange = name => event => {
      setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        signin(user).then((data) => {
            if(data.error){
                setValues({... values, error: data.error})
            } else{
                auth.authenticate(data, () => {
                    setValues({... values, error:'', redirectToReferrer:true})
                })
            }
        })
      }
    
        const {from} = props.location.state || {
            from: {
            pathname: '/'
            }
        }
        const {redirectToReferrer} = values
        if(redirectToReferrer) {
            return(<Redirect to={from}/>)
        }

        return (
            <div>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" className={classes.title}>
                    Signin
                  </Typography>
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
                  <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
                </CardActions>
              </Card>

            <Dialog open={values.open} disableBackdropClick={true}>
            <DialogTitle>New Account</DialogTitle>
            <DialogContent>
              <DialogContentText>
                  Successfully signed in.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to="/">
                </Link>
            </DialogActions>
            </Dialog>
            </div>
            )

}