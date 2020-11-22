import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import icon from '../fakeData/logos/Group 1329.png'
import './Header.css'
import { UserContext } from '../../App';



const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };



    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
        </Menu>
    );
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className={classes.grow}>
            <AppBar style={{ backgroundColor: 'white' }} position="static">
                <Toolbar>
                    <Link to="/home" style={{ marginLeft: '200px' }} className="icon">
                        <img className="icon" src={icon} alt="" />
                    </Link>
                    <div style={{ marginLeft: '100px', backgroundColor: 'gray' }} className={classes.search}>


                    </div>
                    <div className={classes.grow} />
                    <div style={{ marginRight: '200px' }} className={classes.sectionDesktop}>
                        <Link style={{ textDecoration: 'none', margin: '20px 10px 0px 10px', color: 'black' }}>News</Link>
                        <Link to='/details' style={{ textDecoration: 'none', margin: '20px 10px 0px 10px', color: 'black' }}>Destination</Link>
                        <Link style={{ textDecoration: 'none', margin: '20px 10px 0px 10px', color: 'black' }}>Blog</Link>
                        <Link style={{ textDecoration: 'none', margin: '20px 10px 0px 10px', color: 'black' }}>Contact</Link>
                        {loggedInUser.isSignedIn ? <Link to='/' onClick={() => setLoggedInUser({})} className="login">Sign Out</Link> :
                            <Link to='/login' className="login">Sign In</Link>
                        }

                        <div style={{ margin: '20px 10px 0px 10px', color: 'black' }}>
                            {loggedInUser.name && loggedInUser.name.split(" ").slice(0, 1)}{" "}
                        </div>

                    </div>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};

export default Header;