export const getLastPage = (notesCount: number) => {
	let lastPage;

	if (notesCount % 10 === 0) {
		lastPage = Math.floor(notesCount / 10);
	} else {
		lastPage = Math.floor(notesCount / 10) + 1;
	}

	return lastPage;
};

export const getRange = (currentPage: string, notesCount: number) => {
	let page = Number(currentPage);
	let startNumber = 10 * (page - 1) + 1;
	let endNumber = 10 * page;

	if (endNumber > notesCount) {
		endNumber = notesCount;
	}

	if (startNumber > endNumber) {
		startNumber = endNumber - (endNumber % 10) + 1;
	}

	if (page <= 0) {
		startNumber = 1;
		endNumber = 10;
	}

	return { startNumber, endNumber };
};
