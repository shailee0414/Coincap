import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { CurrencyBitcoinRounded, Search, SearchOff, Settings } from "@mui/icons-material";

import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';

const Navbars = () => {
  return (
    <Navbar
      key="false"
      bg="light"
      expand={false}
      fixed="top"
    >
      {" "}
      <div className="nav-lg">
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            flex: 1,
            paddingTop: 12,
            paddingBottom: 12,
            alignItems: "center",
          }}
        >
          <div style={{ flex: 0.06 }}>Coins</div>
          <div style={{ flex: 0.08 }}>Exchange</div>
          <div style={{ flex: 0.06 }}>Swap</div>

          <div
            style={{
              flex: 0.4,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              alt="coinCap"
              style={{
                width: "80px",
                height: "auto",
              }}
              src="https://coincap.io/static/logos/black.svg"
            />
          </div>
          <div
            style={{
              flex: 0.1,
              display: "flex",
              justifyContent: "space-around",
              flexShrink:0,
              marginRight:"30px"
            }}
          >
            <SearchRoundedIcon />
            <Settings />
          </div>

          <div
            className="item"
            style={{
              flex: 0.1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              class="ui button circular primary button cta-button"
              style={{
                margin: "0px auto",
                borderRadius: "25px",
                backgroundColor: "rgb(24 198 131)",
                boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
                border: "transparent",
                paddingLeft: "12px",
                paddingRight: "12px",
                paddingTop: 6,
                paddingBottom: 6,
                color: "white",
                flexShrink:0
              }}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
      <div className="nav-sm">
        <div style={{ display:"flex", flex: 1 , alignItems:"center",}}>
          <Search />
        </div>
        <Navbar.Brand href="#" style={{ flex: 1 }}>
          <img src="https://coincap.io/static/logos/black.svg" width={"80px"} style={{ opacity: "1" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${false}`}
          style={{ borderColor: "transparent", }}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-false-${false}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas id={`offcanvasNavbarLabel-false-${false}`}>
              Offcanvas
            </Offcanvas>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center align-items-center flex-grow-1 pe-3">
              <Nav.Item ><CurrencyBitcoinRounded /></Nav.Item>
              <Nav.Link href="#action1">Coins</Nav.Link>
              <Nav.Item><CurrencyExchangeRoundedIcon /></Nav.Item>
              <Nav.Link href="#action2">Exchange</Nav.Link>
              <Nav.Item><SwapHorizRoundedIcon /></Nav.Item>
              <Nav.Link href="#action2">Swap</Nav.Link>
              <Nav.Item><Settings /></Nav.Item>
              <Nav.Link href="#action2">Settings</Nav.Link>
              <button
                class="ui button circular primary button cta-button"
                style={{
                  margin: "0px auto",
                  borderRadius: "25px",
                  backgroundColor: "rgb(24 198 131)",
                  boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
                  border: "transparent",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: 8,
                  paddingBottom: 8,
                  color: "white",
                }}
              >
                Connect Wallet
              </button>

              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-false-${false}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>

  )
}
export default Navbars;