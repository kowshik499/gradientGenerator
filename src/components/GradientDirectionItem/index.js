import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemDetails, onClickButton, isActive} = props
  const {value, displayText} = itemDetails
  const onClickGradientBtn = () => {
    onClickButton(value)
  }
  return (
    <li>
      <Button type="button" onClick={onClickGradientBtn} isActive={isActive}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
