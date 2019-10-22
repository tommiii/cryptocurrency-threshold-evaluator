import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Dot = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

const LoadingWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;;
`;

class Loading extends Component {
  render() {
    return (
      <LoadingWrapper>
        <DotWrapper>
          <Dot delay="0s" />
          <Dot delay=".1s" />
          <Dot delay=".2s" />
        </DotWrapper>
      </LoadingWrapper>
    );
  }
}
export default Loading;
