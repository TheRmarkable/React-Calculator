import { ACTIONS } from "../../constants/Actions"
import AtomButton from "../Atoms/AtomButton"

export default function DigitButton({ dispatch, digit }) {
  return (
    <AtomButton
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      text = {digit}
    >
    </AtomButton>
  )
}
