
import { Sidebar, Menu, MenuItem, } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";


interface Iprops {
    toggled: boolean;
    setToggled: React.Dispatch<React.SetStateAction<boolean>>
}
const SidebarComponent: React.FC<Iprops> = ({ toggled, setToggled }) => {


    return (

        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
            <Sidebar onBackdropClick={() => setToggled(false)} backgroundColor="black" color="white" toggled={toggled} breakPoint="always">
                <Menu>
                    <MenuItem component={<NavLink to="/" onClick={() => { setToggled(false) }} />}>
                        {" "}
                        Home
                    </MenuItem>
                    <MenuItem component={<NavLink to="/aboutus" onClick={() => { setToggled(false) }} />}>
                        {" "}
                        About Us
                    </MenuItem>
                    <MenuItem component={<NavLink to="/terms" onClick={() => { setToggled(false) }} />}>
                        {" "}
                        Terms and Conditions
                    </MenuItem>
                    <MenuItem component={<NavLink to="/disclaimer" onClick={() => { setToggled(false) }} />}>
                        {" "}
                        Disclaimer
                    </MenuItem>
                    <MenuItem component={<NavLink to="/privacypolicy" onClick={() => { setToggled(false) }} />}>
                        {" "}
                        Privacy Policy
                    </MenuItem>
                    <MenuItem component={<NavLink to="/faq" onClick={() => { setToggled(false) }} />}>
                        {" "}
                        FAQ
                    </MenuItem>

                    <MenuItem component={<NavLink to="/contactus" onClick={() => { setToggled(false) }} />}>
                        {" "}
                        Contact Us
                    </MenuItem>
                </Menu>
            </Sidebar>

        </div>
    );
};

export default SidebarComponent;
