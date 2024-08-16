export default {
	install(app, options) {
		const person = {
			name: '안민현',
			say() {
				alert(this.name);
			},
			...options,
		};
		app.config.globalProperties.$person = person;
		app.provide('person', person);
	},
};
