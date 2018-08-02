import {EDIT_ITEM, DELETE_ITEM} from '../constants'

export function editItem(user, id) {
	return {type: EDIT_ITEM, user, id}
}

export function deleteItem(id) {
	return { type: DELETE_ITEM, id }
}
