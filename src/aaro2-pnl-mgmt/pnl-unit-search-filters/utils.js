export const getCurrentYear = () => {
	const currentYear = new Date().getFullYear();
	return currentYear;
}

export const getMonth = (m) => {
	const monthValue = m || new Date().getMonth();
	const monthLabel = MONTHS.filter(month => month.value == monthValue)[0].name;
	return {
		label: monthLabel,
		value: monthValue
	};
}

export const openCloseMonthPicker = () => {
	const popupRefClassList = document.popupRef.current.classList;
	if (popupRefClassList.contains('popup-open')) {
		popupRefClassList.remove('popup-open');
	} else {
		popupRefClassList.add('popup-open');
	}
}

export const MONTHS = [
	{ name: 'January', value: 1 },
	{ name: 'February', value: 2 },
	{ name: 'March', value: 3 },
	{ name: 'April', value: 4 },
	{ name: 'May', value: 5 },
	{ name: 'June', value: 6 },
	{ name: 'July', value: 7 },
	{ name: 'August', value: 8 },
	{ name: 'September', value: 9 },
	{ name: 'October', value: 10 },
	{ name: 'November', value: 11 },
	{ name: 'December', value: 12 }
];
