import data from "../../data"
import {EDIT_ITEM, DELETE_ITEM} from '../actions'

export const itemsActions = (state = data, action) => {
	if (action.type === EDIT_ITEM) {
		const updatedItems = [...state]
		updatedItems[action.id] = action.user
		return updatedItems
	}

	if (action.type === DELETE_ITEM) {
		const updatedItems = state.filter((item, i) => i !== action.id)
		return updatedItems
	}

	return state
}

export default itemsActions