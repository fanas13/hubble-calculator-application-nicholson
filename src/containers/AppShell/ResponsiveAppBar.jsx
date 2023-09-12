import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import styled from 'styled-components';
import AppLogo from './AppLogo';

const pages = ['Products', 'Pricing', 'Blog'];

const ResponsiveAppBar = (props) => {
  debugger
  const { className } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
    </div>
  );
}
export default styled(ResponsiveAppBar)`

`;