import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link,Outlet} from "react-router-dom";
import '../App.css';
const NavBar = () => {
    const [activeNavKey, setNavKey] = useState("/users");

  const handleSelect = (eventKey) => {
    setNavKey(eventKey);
  };
    return (
        <>
          <Nav variant="pills" className="justify-content-center" defaultActiveKey={"/users"} activeKey={activeNavKey} >
            <Nav.Item>
              <Nav.Link
                to="/users"
                as={Link}
                active={activeNavKey === "/users" ? true : false}
                onClick={()=>handleSelect("/users")}
              >
                Users
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                to="/projects"
                as={Link}
                active={activeNavKey === "/projects" ? true : false}
                onClick={()=>handleSelect("/projects")}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                to="/status"
                as={Link}
                active={activeNavKey === "/status" ? true : false}
                onClick={()=>handleSelect("/status")}
              >
                Status
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                to="/reports"
                as={Link}
                active={activeNavKey === "/reports" ? true : false}
                onClick={()=>handleSelect("/reports")}
              >
                Reports
              </Nav.Link>
            </Nav.Item>
          </Nav>
    
          <hr />
          <Outlet />
        </>
      );
};

export default NavBar;
