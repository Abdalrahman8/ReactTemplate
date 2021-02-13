import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor } from './style.js';

const Nav = () => {
    return (

        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>

                <UlList>
                    <ListItem><Link to="/"><Anchor>Home</Anchor></Link></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><Link to="/contact"><Anchor>Contact</Anchor></Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>

    );
}


export default Nav;



// //         <div>
//             <Link to="/">Home</Link>
//             <Link to="/contact">Contact</Link>
//         </div>