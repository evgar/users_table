import {EDIT_ITEM, DELETE_ITEM} from '../constants'

const data = [
	{
		"candidateName": "Peter Petrov",
		"candidateStatus": "pending",
		"candidateNeedOffer": 1800,
	},
	{
		"candidateName": "Ivan Ivanov",
		"candidateStatus": "pending",
		"candidateNeedOffer": 3000,
	},
	{
		"candidateName": "Roman Romanov",
		"candidateStatus": "oninterview",
		"candidateNeedOffer": 2400,
	},
	{
		"candidateName": "Konstantin Konstantinov",
		"candidateStatus": "on_test_perdiod",
		"candidateNeedOffer": 3000,
	}
]

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
