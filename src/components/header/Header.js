import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'; 

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="warning" light expand="md">
          <NavbarBrand href="/">VeRa - образователна система </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact tag={RRNavLink} to="/">Начало</NavLink>
              </NavItem>    

              <NavItem>
                <NavLink exact tag={RRNavLink} to="/profile">Моят профил</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/students">Ученици</NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Домашни и уроци   
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={RRNavLink} to="/homeworks">
                    Виж домашни
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Виж уроци 
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={RRNavLink} to="/addhomework">
                    Добави домашна
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Добави урок
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    История домашни 
                  </DropdownItem>
                  <DropdownItem>
                    История уроци 
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

               <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Тестове 
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem  tag={RRNavLink} to="/tests">
                    Виж тестове
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem  tag={RRNavLink} to="/addtest">
                    Добави тестове
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    История 
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

               <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Настройки  
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Смени тема 
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Смени шрифт 
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}