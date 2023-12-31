import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AppLogo from './AppLogo';

const pages = ['Products', 'Pricing', 'Blog'];

const ResponsiveAppBar = (props) => {
  const { className, children } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const StyledAppBar = styled(AppBar)`
    && {
      background-color: ${props.palette.primary.main}
    }
  `;

  return (
    <div className={className}>
      <StyledAppBar color="primary" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppLogo />
          </Toolbar>
        </Container>
      </StyledAppBar>
      
      <>
        {/* to render nested routes very important */}
        <Outlet /> 
      </>
    </div>
  );
}
export default styled(ResponsiveAppBar)`
  
`;