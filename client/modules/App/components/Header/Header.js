import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

// const Links = () =>
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/marketplace">marketplace</Link>
//   </nav>;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" fixed="top" light toggleable>
          <NavbarToggler right onClick={::this.toggle} />
          <NavbarBrand href="/">&#9774; Vizume</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  Go Go Go <FontAwesome name="rocket" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Log In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default Header;
