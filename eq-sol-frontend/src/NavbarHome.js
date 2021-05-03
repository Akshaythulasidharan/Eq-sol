import React,{ useState } from 'react'
import Logo from './images/EQ-Sol Logo Full.svg'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom'


  
export default function NavbarHome() {

    const [isOpen, setIsOpen] = useState(false);
      
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
             <Navbar className="navbar-home" expand="md">
                <NavbarBrand>
                    <img src={Logo} className="navbarhome-logo" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto ml-auto" navbar>
                    <NavItem>
                    <Link to="/"><i className="fas fa-home homenavbar-icon active" ></i> </Link>
                    </NavItem>
                    <NavItem>
                    <Link to="/about"><i className="fas fa-info-circle homenavbar-icon"></i></Link>
                    </NavItem> 
                </Nav>
                <NavbarText><i class="fas fa-cog" style={{fontSize:"30px"}}></i></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
