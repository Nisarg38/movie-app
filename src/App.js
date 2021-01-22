import logo from './logo.svg';
import { Nav, Navbar, Form, FormControl, Button, Image} from 'react-bootstrap';
import React, { useReducer, useEffect } from "react";
import ColoredLine from './components/breakline';
import Search from './components/Search';
import Movie from './components/Movie';
import axios from "axios";
import { initialState, reducer } from "./components/reducer";
import spinner from "./assests/ajax-loader.gif";

function App() {
  return (
    <Navbar bg="dark" variant="dark"  sticky="top" Rounded>
    <Navbar.Brand href="#home">Shoppies</Navbar.Brand>
    <Image //Add gif as the icon, in downloads 
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fgifs%2F65LcwStZ4smNeDa6jQ%2Fhtml5&psig=AOvVaw20mYrRPx4NEf42mVqldd0t&ust=1611396903443000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDik7Snr-4CFQAAAAAdAAAAABAD"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <Nav className="mr-auto">
      <Nav.Link href="#home">Shopify</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default App;
