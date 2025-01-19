import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useIsMobile } from "../../hooks/useMobile";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { ApiButton } from "./ApiButton";

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header >
      <div className={styles.container}>
        <Link to="/homevork-18" className={styles.logo}>
          <img src={logo} alt="logo" />
          {/* <span>Jelly Belly</span> */}
        </Link>
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
        {isMobile ? "" : <ApiButton/>}
        
      </div>
    </header>
  );
};
