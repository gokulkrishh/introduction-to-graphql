import { users } from '../users';

export const createUser = args => {
	const { name, age, gender } = args;
	const user = users.filter(user => user.name === name);
	if (user.length === 0) {
		const user = { name, age, gender };
		users.push(user);
		return user;
	} else return `A user with that name already exists.`;
};

export const updateUser = args => {
	const { id, name, age, gender } = args;
	const user = users.filter(user => user.id === id);
	if (user.length === 1) {
		user[0].name = name;
		user[0].age = age;
		user[0].gender = gender;
		return user[0]; // Actual backend will replace it existing user in DB
	} else return `User doesn't exist for id ${id}.`;
};

export const deleteUser = args => {
	const { id } = args;
	const user = users.filter(user => user.id === id);
	if (user.length === 1) {
		console.log('id --->', user[0]); // eslint-disable-line
		return user[0]; // Actual backend will delete id matching user from DB
	} else return `User doesn't exist for id ${id}.`;
};
