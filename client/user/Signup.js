import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {create} from './api-user.js'
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog'
import {Link} from 'react-router-dom'

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 2
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2
  }
})

class Signup extends Component {
    values = {
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    clickSubmit = () => {
        const user = {
            name: this.values.name || undefined,
            email: this.values.email || undefined,
            password: this.values.password || undefined
        }
        create(user).then((data) => {
            if(data.error){
                this.setState({error: data.error})
            } else{
                this.setState({error: '', open: true})
            }
        })
    }
    render() {
      const {classes} = this.props
    return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Sign Up
          </Typography>
          <TextField id="name" label="Name" 
             className={classes.textField} 
             value={this.values.name} onChange={this.handleChange('name')} 
             margin="normal"/>
          <br/>
          <TextField id="email" type="email" label="Email" 
             className={classes.textField} 
             value={this.values.email} onChange={this.handleChange('email')} 
             margin="normal"/>
          <br/>
          <TextField id="password" type="password" label="Password" 
             className={classes.textField} value={this.values.password} 
             onChange={this.handleChange('password')} margin="normal"/>
          <br/> 
          {
            this.values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {this.values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={this.clickSubmit} 
            className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>

    <Dialog open={this.values.open} disableBackdropClick={true}>
    <DialogTitle>New Account</DialogTitle>
    <DialogContent>
      <DialogContentText>
          New account successfully created.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Link to="/signin">
          <Button color="primary" autoFocus="autoFocus" 
                  variant="contained">
              Sign In
          </Button>
        </Link>
    </DialogActions>
    </Dialog>
    </div>
    )

    }
}

export default withStyles(styles)(Signup)