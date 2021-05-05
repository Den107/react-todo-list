import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`


const AppHeader = () => {
  return (
    <Header>
      <h1>Denis Kravchuck</h1>
      <h2>5 записей, из них понравилось 0</h2>
    </Header>
  )
}

export default AppHeader;