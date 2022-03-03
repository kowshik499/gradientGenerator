import {Component} from 'react'
import {
  AppCont,
  ContentCont,
  ContentHead,
  ContentPara,
  ButtonsCont,
  InputsCont,
  InputCont,
  InputComp,
  Label,
  GenerateBtn,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    input1: '#8ae323',
    input2: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeInput1 = event => {
    this.setState({input1: event.target.value})
  }

  onChangeInput2 = event => {
    this.setState({input2: event.target.value})
  }

  onClickButton = value => {
    this.setState({gradientDirection: value})
  }

  onClickGenerateBtn = () => {
    const {input1, input2, value} = this.state
    console.log(input1, input2, value)
    this.setState({gradientValue: `to ${value}, ${input1}, ${input2}`})
  }

  render() {
    const {input1, input2, gradientDirection, gradientValue} = this.state
    return (
      <AppCont gradient={gradientValue} data-testid="gradientGenerator">
        <ContentCont>
          <ContentHead>Generate a CSS Color Gradient</ContentHead>
          <ContentPara>Choose Direction</ContentPara>
          <ButtonsCont>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                itemDetails={eachItem}
                key={eachItem.directionId}
                onClickButton={this.onClickButton}
                isActive={gradientDirection === eachItem.value}
              />
            ))}
          </ButtonsCont>
          <ContentPara>Pick the Colors</ContentPara>
          <InputsCont as="div">
            <InputCont>
              <Label>{input1}</Label>
              <InputComp
                type="color"
                value={input1}
                id="color1"
                onChange={this.onChangeInput1}
              />
            </InputCont>
            <InputCont>
              <Label>{input2}</Label>
              <InputComp
                type="color"
                value={input2}
                id="color2"
                onChange={this.OnChangeInput2}
              />
            </InputCont>
          </InputsCont>
          <GenerateBtn type="button" onClick={this.onClickGenerateBtn}>
            Generate
          </GenerateBtn>
        </ContentCont>
      </AppCont>
    )
  }
}

export default GradientGenerator
