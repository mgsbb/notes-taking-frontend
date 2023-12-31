export type TAuthFormData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export type TNoteFormData = {
	_id?: string;
	title?: string;
	content?: string;
	tags?: string;
	updatedAt?: string;
};
