import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const ClientNavbar = () => {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const closeButton = () => {
        setAnchorEl(null);
      };

    return (
        <div className="row navbar nav-bg" style={{ backgroundColor: 'yellowgreen', height: '65px' }}>
            <div className="col-auto col-md-6 d-flex justify-content-start">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <MenuIcon></MenuIcon>
                </button>
            </div>
            <div className="col-auto col-md-6 p-2 d-flex justify-content-end">
                <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        {loggedInUser.name}
                        <AccountCircleIcon style={{ marginLeft: '5px' }}></AccountCircleIcon>

                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={closeButton}
                    >
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >My account</MenuItem>
                        <MenuItem onClick={() => setLoggedInUser({})}>Logout</MenuItem>
                    </Menu>
                </div>

            </div>
        </div>
    );
};

export default ClientNavbar;