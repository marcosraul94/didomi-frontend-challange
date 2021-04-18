import React from 'react';
import PropTypes from 'prop-types';
import StyledGrid from './styles';

const MainSectionContainer = ({ children }) => (
  <StyledGrid
    item
    xs={12}
    sm={10}
    container
    direction="column"
    justify="flex-start"
    alignItems="center"
  >
    {children}
  </StyledGrid>
);

MainSectionContainer.propTypes = {
  children: PropTypes.node,
};

MainSectionContainer.defaultProps = {
  children: undefined,
};

export default MainSectionContainer;
