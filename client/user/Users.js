import React, {Component, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Person from '@material-ui/icons/Person'
import {Link} from 'react-router-dom'
import {list} from './api-user.js'


export default function Users() {
  
    const [users, setUsers] = useState([])

    useEffect(() => {
      const abortController = new AbortController()
      const signal = abortController.signal

      list(signal).then((data) => {
        if(data && data.error){
          console.log(data.error)
        } else{
          setUsers(data)
        }
      })
      return function cleanup(){
        abortController.abort()
      }
    }, [])

    return (
        <Paper className={classes.root} elevation={4}>
          <Typography variant="h6" className={classes.title}>
            All Users
          </Typography>
          <List dense>
           {users.map((item, i) => {
            return <Link to={"/user/" + item._id} key={i}>
                      <ListItem button>
                        <ListItemAvatar>
                        <Avatar>
                          <Person/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.name}/>
                      <ListItemSecondaryAction>
                      <IconButton>
                          <ArrowForward/>
                      </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                 </Link>
               })
             }
        </List>
      </Paper>
    )                           
}
