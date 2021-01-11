import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Button from 'material-ui/Button'
import {unfollow, follow} from './api-user.js'

class FollowProfileButton extends Component {
    followClick = () => {
        this.props.onButtonClick(follow)
    }
    unfollowClick = () => {
        this.props.onButtonClick(unfollow)
    }
    render() {
        {this.props.following
        ? (<Button variant="raised" color="secondary" onClick={this.unfollowClick}>Unfollow</Button>)
        : (<Button variant="raised" color="primary" onClick={this.followClick}>Follow</Button>)
    }
}