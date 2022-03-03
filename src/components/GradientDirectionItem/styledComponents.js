import styled from 'styled-components'

export const Button = styled.button`
  border: 0px;
  border-radius: 5px;
  width: 100px;
  height: 35px;
  font-size: 13px;
  color: #1e293b;
  font-family: 'Roboto';
  background-color: ${props => (props.isActive ? '#ffffff' : '#ededed')};
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
