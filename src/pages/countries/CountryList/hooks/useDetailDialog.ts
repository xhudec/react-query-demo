import { useReducer } from 'react'

export interface IDetailDialogState {
  isOpen: boolean
  countryCode: string | null
}

export type TDetailDialogAction =
  | { type: 'OPEN_DIALOG'; payload: { countryCode: string } }
  | { type: 'CLOSE_DIALOG' }

const initialDetailDialogState: IDetailDialogState = {
  isOpen: false,
  countryCode: null,
}

const detailDialogReducer = (
  state: IDetailDialogState,
  action: TDetailDialogAction
): IDetailDialogState => {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return {
        ...state,
        isOpen: true,
        countryCode: action.payload.countryCode,
      }
    case 'CLOSE_DIALOG': {
      return {
        ...state,
        isOpen: false,
        countryCode: null,
      }
    }
    default:
      return state
  }
}

const useDetailDialog = () => {
  return useReducer(detailDialogReducer, initialDetailDialogState)
}

export default useDetailDialog
export { initialDetailDialogState, detailDialogReducer }
