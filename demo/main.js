document.addEventListener('DOMContentLoaded', () => {
	const demoBtn1 = document.querySelector('.demoBtn1');
	const demoCard1Name = document.querySelector('.demo-1 .name');
	const demoCard1Age = document.querySelector('.demo-1 .age');
	const demoCard1Gender = document.querySelector('.demo-1 .gender');
	const demoCard1Phone = document.querySelector('.demo-1 .phone');
	const demoCard1Email = document.querySelector('.demo-1 .email');
	const spinner1 = document.querySelector('.lds-ring.spinner1');

	const demoCard2Name = document.querySelector('.demo-2 .name');
	const demoCard2EyeColor = document.querySelector('.demo-2 .eye-color');
	const demoCard2Balance = document.querySelector('.demo-2 .balance');
	const demoCard2Phone = document.querySelector('.demo-2 .phone');
	const demoCard2Email = document.querySelector('.demo-2 .email');
	const spinner2 = document.querySelector('.lds-ring.spinner2');

	const demoBtn2 = document.querySelector('.demoBtn2');

	const { createApolloFetch } = window.apolloFetch; // Using apollo fetch to make GraphQL API calls

	const fetch = createApolloFetch({
		uri: 'https://hello-world-graphql-oifivtepjc.now.sh/graphql'
	});

	demoBtn1.addEventListener('click', () => {
		spinner1.classList.add('show');
		fetch({
			query: `{
        user(id: 1) {
          name
          age
          gender
        }
      }`
		}).then(response => {
			spinner1.classList.remove('show');
			const { user } = response.data;
			demoCard1Name.textContent = user.name;
			demoCard1Age.textContent = user.age;
			demoCard1Gender.textContent = user.gender;
		});
	});

	demoBtn2.addEventListener('click', () => {
		spinner2.classList.add('show');
		fetch({
			query: `{
        user(id: 2) {
          name
          email
          phone
          balance
          eyeColor
        }
      }`
		}).then(response => {
			spinner2.classList.remove('show');
			const { user } = response.data;
			demoCard2Name.textContent = user.name;
			demoCard2Email.textContent = user.email;
			demoCard2Balance.textContent = user.balance;
			demoCard2EyeColor.textContent = user.eyeColor;
			demoCard2Phone.textContent = user.phone;
		});
	});
});
