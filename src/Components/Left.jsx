import { Container, makeStyles, Typography, alpha, IconButton } from '@material-ui/core'
import { Home } from '@material-ui/icons'
import React from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import AppsIcon from '@material-ui/icons/Apps';
import CollectionsIcon from '@material-ui/icons/Collections';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ListIcon from '@material-ui/icons/List';


const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        position: 'sticky',
        top: 0
    },

    linkItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: 'pointer'
        },
        // '&:hover':{
        //     backgroundColor: alpha(theme.palette.common.white, 0.15),
        // }
    },
    iconButton:{
        color: '#fff'
    },

    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]:{
            fontSize: '18px'
        }
    },

    text:{
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    }
}))
const Left = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.linkItem}>
                <IconButton className={classes.iconButton}>
                    <Home className={classes.icon}/>
                </IconButton>
                <Typography className={classes.text}>Home</Typography>
            </div>

            <div className={classes.linkItem}>
                <IconButton className={classes.iconButton}>
                    <PeopleAltIcon className={classes.icon}/>
                </IconButton>
                <Typography className={classes.text}>Friends</Typography>
            </div>

            <div className={classes.linkItem}>
                <IconButton className={classes.iconButton}>
                    <ListIcon className={classes.icon}/>
                </IconButton>
                <Typography className={classes.text}>Lists</Typography>
            </div>

            <div className={classes.linkItem}>
                <IconButton className={classes.iconButton}>
                    <PermMediaIcon className={classes.icon}/>
                </IconButton>
                <Typography className={classes.text}>Images</Typography>
            </div>

            <div className={classes.linkItem}>
                <IconButton className={classes.iconButton}>
                    <AppsIcon className={classes.icon}/>
                </IconButton>
                <Typography className={classes.text}>Apps</Typography>
            </div>

            <div className={classes.linkItem}>
                <IconButton className={classes.iconButton}>
                    <CollectionsIcon className={classes.icon}/>
                </IconButton>
                <Typography className={classes.text}>Collections</Typography>
            </div>



            <div className={classes.linkItem}>
                <IconButton className={classes.iconButton}>
                    <StorefrontIcon className={classes.icon}/>
                </IconButton>
                <Typography className={classes.text}>Market Place</Typography>
            </div>

            <div className={classes.linkItem}>
                <IconButton className={classes.iconButton}>
                    <SettingsIcon className={classes.icon}/>
                </IconButton>
                <Typography className={classes.text}>Settings</Typography>
            </div>

            <div className={classes.linkItem}>
                <IconButton className={classes.iconButton}>
                    <PowerSettingsNewIcon className={classes.icon}/>
                </IconButton>
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    )
}

export default Left