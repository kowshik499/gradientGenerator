// Style your elements here
import styled from 'styled-components'

export const AppCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradient});
`

export const ContentCont = styled(AppCont)`
  background-image: none;
  min-height: none;
  width: 50%;
`

export const ContentHead = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
`

export const ContentPara = styled.p`
  color: #ededed;
  font-size: 15px;
  font-family: 'Roboto';
`

export const ButtonsCont = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-left: 0px;
`

export const Button = styled.button`
  border: 0px;
  border-radius: 5px;
  width: 100px;
  height: 35px;
  font-size: 13px;
  color: #1e293b;
  font-family: 'Roboto';
  background-color: ${props => (props.selected ? '#ffffff' : '#ededed')};
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  opacity: ${props => (props.selected ? 1 : 0.5)};
`

export const InputsCont = styled(ButtonsCont)`
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.p`
  color: #ededed;
  font-size: 13px;
  font-family: 'Roboto';
`

export const InputComp = styled.input`
  border: 1px solid #1e293b;
  width: 100px;
  height: 35px;
  cursor: pointer;
  outline: none;
  padding: 0;
`
export const GenerateBtn = styled.button`
  border: 0px;
  border-radius: 5px;
  width: 100px;
  height: 35px;
  font-size: 13px;
  color: #1e293b;
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  background-color: #00c9b7;
`
