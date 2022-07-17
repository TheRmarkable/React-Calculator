import { ACTIONS } from "../../constants/Actions"
import AtomButton from "../Atoms/AtomButton"



export default function OperationButton({ dispatch, operation }) {
  return (
    <AtomButton
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      text = {operation}
    >
    </AtomButton>
  )
}
