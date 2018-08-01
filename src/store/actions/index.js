export const EDIT_ITEM = 'EDIT_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export function editItem(user, id) {
	return {type: "EDIT_ITEM", user, id}
}

export function deleteItem(id) {
	return { type: "DELETE_ITEM", id }
}
