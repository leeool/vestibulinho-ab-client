import styled from 'styled-components';

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #CF2E2E;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  font-size: 24px;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);

  &:hover {
    background-color: #BA2929;
  }
`;