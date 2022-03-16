import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

class AppNavbar extends Component {
  state = {
    isOpen: false,
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5' container>
          <NavbarBrand href='/'>Shopping List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ms-auto' navbar></Nav>
            <NavItem>
              <NavLink href='https://github.com/KDOGE007/MERN_shopping_list-Backend'>
                Github
              </NavLink>
            </NavItem>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar
