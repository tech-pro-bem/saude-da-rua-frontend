import {FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaInstagram/>                    
                </li>
            </ul>
            <p className={styles.copy_rigth}>
        <span>Saúde da Rua</span> &copy; 2021
        </p>
        </footer>
    )
}
export default Footer;