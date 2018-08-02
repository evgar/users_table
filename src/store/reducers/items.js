import {EDIT_ITEM, DELETE_ITEM, ADD_ITEM} from '../constants'

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
	switch(action.type){
		case EDIT_ITEM:
			const items = [...state]
			items[action.id] = action.user
			return items

		case DELETE_ITEM:
			const newItems = state.filter((item, i) => i !== action.id)
			return newItems

		case ADD_ITEM:
			const updatedItems = [...state]
			return [...updatedItems, action.user]

		default:
			return state
	}
}

export default itemsActions
