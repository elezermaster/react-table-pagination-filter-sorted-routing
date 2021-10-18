import React,{useState,useRef,useEffect,useContext} from 'react';
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
import {UsersSearchContext} from '../app'

const NavBar = ({handleSearchChange}) => {
    const ctx = useContext(UsersSearchContext)
    console.log('nav ctx',ctx)
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);
    useEffect(() => {
        formRef?.current?.reset();
        setValidated(false);
        return () => {
            //cleanup
        }
    }, [ctx])

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
            <Nav.Link exact as={NavLinkStyled} to="/users" activeStyle={{color: 'white', textDecoration: 'none'}}>Users</Nav.Link>
            <Nav.Link exact as={NavLinkStyled} to="/sign-in" activeStyle={{color: 'white', textDecoration: 'none'}}>Login</Nav.Link>

            {/* <NavDropdownStyled
                title="Login"
                id="navbarScrollingDropdown">
                <NavDropdown.Item href="/sign-in" to="/sign-in" as={Link}>
                    Sign In
                </NavDropdown.Item>
                <NavDropdown.Item href="/sign-in/register" to="/sign-in/register" as={Link}>
                    Sign Up
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Exit</NavDropdown.Item>
            </NavDropdownStyled> */}

            </Nav>
            <Nav className="dropdown-menu-right navbar-right justify-content-end mr-auto my-rg-2" style={{width: "100%" , marginRight: 15}}>
            <Form
                noValidate
                validated={validated}
                ref={formRef}
                className="d-flex justify-content-end mr-auto my-rg-1"
                name="search"
                >
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-auto"
                aria-label="Search"
                onChange={(e) => handleSearchChange(e.target.value)}
                name="search"
                defaultValue={ctx}//searchStatus
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
