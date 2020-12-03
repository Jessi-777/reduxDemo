import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux'
import {followUsers, unFollowUsers} from './actions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  
    "buttonStyle": {
      margin: theme.spacing(1),
      backgroundColor: "green",
    },
  
  inline: {
    display: "inline",
  },
  ".current.MuiButton-containedPrimary": {
    backgroundColor: "green",
  },
}));

function AlignItemsList(props) {
    const classes = useStyles();

    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={props.avatar} />
          </ListItemAvatar>

          <ListItemText
            primary={`${props.first_name} ${props.last_name}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                ></Typography>
                {props.email}
              </React.Fragment>
            }
          />
          <div style={{ alignItems: "right" }}>
            <ListItemText
              primary={
                <>
                  {!props.following ? (
                                    <Button
                                        className={classes.buttonStyle}
                      variant="contained"
                      color="primary"
                      onClick={() => props.followUsers(props.id)}
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => props.unFollowUsers(props.id)}
                    >
                      Unfollow
                    </Button>
                  )}
                </>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                </React.Fragment>
              }
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
}

export default connect(null , {followUsers,unFollowUsers})(AlignItemsList)
