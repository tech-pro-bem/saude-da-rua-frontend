import { Link } from 'react-router-dom';
/*import Container from './Container';*/
/*import styles from './Navbar.module.css'*/
/*import logo from '../../img/logo.png'*/


import { Navbar} from 'rbx';

function Navbar1() {

    return (
        <Navbar class = "has-background-black"> 
        
            <Navbar.Brand >                                    
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu >
                <Navbar.Segment align="end">               
                    <Link to="/">
                        <Navbar.Item >Saúde da Rua</Navbar.Item>
                    </Link>
                    <Link to="/acoes">
                        <Navbar.Item >Ações</Navbar.Item>
                    </Link>                    
                    <Link to="/sobre">
                        <Navbar.Item >Sobre</Navbar.Item>
                    </Link>                                        
                    <Link to="/voluntariado">
                        <Navbar.Item >Seja Voluntário</Navbar.Item>
                    </Link>
                    <Link to="/loja">
                        <Navbar.Item >Loja</Navbar.Item>
                    </Link>
                </Navbar.Segment>
                <Navbar.Segment align="end">
                    <Navbar.Item>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    )
}

export default Navbar1;


/*navbar is-primary    has-background-black */
                    

             