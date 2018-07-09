import { users } from './users';

export const getUser = args => {
	const { id } = args;
	const user = users.filter(user => user.id === id);
	if (user.length === 1) return user[0];
	return `User not found for the id ${id}`;
};
export const getUsers = args => {
	const { gender } = args;
	if (gender) return users.filter(user => user.gender === gender);
	return users;
};
