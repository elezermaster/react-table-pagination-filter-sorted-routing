import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,FormControl,
    Button,
    Dropdown,
    NavItem,
} from 'react-bootstrap'
import {Link, NavLink,useLocation} from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
    const location = useLocation();
    //console.log('loc',location)
    const [showDropdown, setShowDropdown] = useState(false);
    const waitBeforeClose = 1;
    useEffect(
        () => {
            setTimeout(() => {
                setShowDropdown(prevState => !prevState)
              }, waitBeforeClose);
          //const timer1 = setTimeout(() => showDropdown && setShowDropdown(prevState => !prevState), waitBeforeClose * 1000);
          // this will clear Timeout
          // when component unmount like in willComponentUnmount
          // and show will not change to true
        //   return () => {
        //     clearTimeout(timer1);
        //   };
        },
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        [waitBeforeClose],
      );
      return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand
            to="/"
            style={{marginLeft: 15}}
            >Fast Company</Navbar.Brand>
        <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{marginRight: 15}}
            />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
            className="mr-auto my-2 my-lg-1"
            style={{maxHeight: '100px'}}
            navbarScroll
            >

            <Nav.Link exact as={NavLinkStyled} to="/" activeStyle={{color: 'white', textDecoration: 'none'}}>Home</Nav.Link>
            {/* <Nav.Link
                exact as={NavLinkStyled}
                to="/sign-in"
                activeStyle={{color: 'white', textDecoration: 'none'}}
                //className="dropdown-menu"
                >Login
            </Nav.Link> */}
            <Nav.Link exact as={NavLinkStyled} to="/users" activeStyle={{color: 'white', textDecoration: 'none'}}>Users</Nav.Link>

            <NavDropdownStyled
                //exact="true"
                onMouseLeave={() => setShowDropdown(false)}
                onMouseOver={() => setShowDropdown(true)}
                //show={showDropdown}
                title="Login"
                //onToggle={() => { (location.pathname !== '/sign-in') && (window.location.href = '/sign-in') }}
                //as={NavItem}
                //as={Link} to="/sign-in"
                id="navbarScrollingDropdown">
                <NavDropdown.Item href="/sign-in" to="/sign-in" as={Link}>
                    Sign In
                </NavDropdown.Item>
                <NavDropdown.Item href="/sign-up" to="/sign-up" as={Link}>
                    Sign Up
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Exit</NavDropdown.Item>
            </NavDropdownStyled>

            </Nav>
            <Nav className="dropdown-menu-right navbar-right justify-content-end mr-auto my-rg-2" style={{width: "100%" , marginRight: 15}}>
            <Form className="d-flex justify-content-end mr-auto my-rg-1">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-auto"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
};

const NavDropdownStyled = styled(NavDropdown)`
text-decoration: none;
&:hover {
    background-color: #ced4da;
    border-radius: 3px;
}
`
const NavLinkStyled = styled(NavLink)`
     text-decoration: none;
    &:hover {
        background-color: #ced4da;
        border-radius: 3px;
    }
    &.active {
        border-radius: 3px;
        color: #fff;
        border-color: #16fe5c;
        background-color: #6c757d;
        text-color: tomato;
        text-decoration: none;
        a:active{
            color: #fff;
          }
    }
`;

export default NavBar;
