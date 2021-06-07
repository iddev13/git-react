
export const updateObjectInArray = (items, itemId, objPropName, newObgProps) => {
	return items.map(elem => {
		if (elem[objPropName] === itemId) {
			return { ...elem, ...newObgProps }
		}
		return elem;
	})
}