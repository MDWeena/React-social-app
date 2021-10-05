import React, {useState} from 'react';
import {
    alpha,
    makeStyles,
    AppBar,
    Avatar,
    Toolbar, 
    IconButton, 
    Typography, 
    InputBase, 
    Badge, 
    MenuItem, 
    Menu
} from '@material-ui/core';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    search: {
        paddingLeft: '5px',
        paddingRight: '5px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        "&:hover":{
            backgroundColor: alpha(theme.palette.common.black, 0.25)
        },
        borderRadius: theme.shape.borderRadius,
        width: '25%',
        [theme.breakpoints.down('sm')]:{
            display: (props) => (props.guyShow ? "flex" : "none"),
            width: '40%'
        }
    },
    input: {
        color: 'white',
        
    },
    cancel: {
        [theme.breakpoints.up('md')]:{
            display: 'none'
        }
    },
    icons: {
        display: (props) => (props.guyShow ? "none" : 'flex'),
        alignItems: 'center'
    },
    searchButton:{
        marginRight: theme.spacing(2),
        cursor: 'pointer',
        [theme.breakpoints.up('md')]:{
            display: 'none'
        }
        
    },
    badge: {
        marginRight: theme.spacing(2),
        cursor: 'pointer'
    }
}))

export default function Navbar() {
    const [guyShow, setGuyShow] = useState(false)
    const classes = useStyles({guyShow});
    return(
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6'>
                    WAAWSocial
                </Typography>

                <div className={classes.search}>
                    <Search />
                    <InputBase className={classes.input} placeholder='Search...'/>
                    <Cancel 
                        className={classes.cancel}
                        onClick={() => setGuyShow(false)}
                    />
                </div>

                <div className={classes.icons}>
                    <Search 
                        className={classes.searchButton} 
                        onClick={() => setGuyShow(true)}
                    />
                    <Badge className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar
                        alt="Winner Akpologun"
                        src="https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/170098228_3842562069193005_3945945610339133826_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEfnxxoX4IurRS3UVR1WN_KU5QYy0NF9ctTlBjLQ0X1y0QPYzz4djxaqVIk3NtWKkjyD6eP0p9oT3xBpPwuknhV&_nc_ohc=NwptVPx_tmUAX-TFd93&_nc_ht=scontent-los2-1.xx&oh=0c27dac4ce02037b4b458bd3146919d1&oe=617CFD90"
                    />
                </div>
            </Toolbar>
        </AppBar>
    )
}
