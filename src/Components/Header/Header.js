import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './Header.css';
import LoginModal from '../Auth/LoginModal';
import SignUpModal from '../Auth/SignUpModal';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignUp, setOpenSignUp] = React.useState(false);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigateToProfile = () => {
        navigate('/profile');
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogin = () => {
        setOpenLogin(true)
    }

    const handleSignUp = () => {
        setOpenSignUp(true)
    }

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/'
    };

    const token = localStorage.getItem('accessToken');

    return (
        <AppBar className='navbar-bg' >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => { navigate('/') }}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Let's Write
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" href="/">About us</Typography>
                            </MenuItem>
                            {token ? null : (
                                <div>
                                    <MenuItem onClick={handleSignUp}>
                                        <Typography textAlign="center" href="/">Sign up</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleLogin}>
                                        <Typography textAlign="center" href="/login">Login</Typography>
                                    </MenuItem>
                                </div>
                            )}

                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>


                    <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 3, mx: 2, color: 'white', display: 'block', textTransform: 'capitalize', fontSize: '18px' }}
                        >
                            About us
                        </Button>
                        {token ? (
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 5 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" href="/profile" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {/* {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))} */}

                                    <MenuItem key={""} onClick={navigateToProfile}>
                                        <Typography textAlign="center">{settings[0]}</Typography>
                                    </MenuItem>
                                    <MenuItem key={""} onClick={handleLogout}>
                                        <Typography textAlign="center">{settings[3]}</Typography>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Button
                                    onClick={handleSignUp}
                                    sx={{ my: 3, mx: 2, color: 'white', display: 'block', textTransform: 'capitalize', fontSize: '18px' }}
                                >
                                    Sign up
                                </Button>
                                <Button
                                    onClick={handleLogin}
                                    sx={{ my: 3, mx: 2, color: 'white', display: 'block', textTransform: 'capitalize', fontSize: '18px' }}
                                >
                                    Login
                                </Button>
                            </>
                        )}
                    </Box>
                </Toolbar>
                <LoginModal openLogin={openLogin} setLoginOpen={setOpenLogin} />
                <SignUpModal openSignUp={openSignUp} setSignUpOpen={setOpenSignUp} />
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
