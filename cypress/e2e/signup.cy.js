import { faker } from '@faker-js/faker';
import { form } from '@pages/pages/signup.Page';
import { removeLogs } from '@helper/RemoveLogs';

describe('TS: ✅LoroTest | Forms | Practice Form', () => {
	it('TC1: Validar el funcionamiento del formulario con datos aleatorios correctos.', () => {
		cy.visit('https://www.loroinsurance.com/signup');
		cy.url().should('contain', '/signup');

		//Se declaran las constantes de los inputs para utilizar faker y su librería
		const randomName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const randomMail = faker.internet.email();
		const randomPassword = faker.internet.password(); //se genera una sola vez
		const randomSiteName = faker.internet.userName();
		//Se deben agregar a sesiones por cada test
		//sino solamente se está automatizando pero no está validando nada
		form.typeName(randomName);
		form.get.inputName().should('have.value', randomName);

		form.typeSureName(randomLastName);
		form.get.inputSureName().should('have.value', randomLastName);

		form.typeMail(randomMail);
		form.get.inputMail().should('have.value', randomMail);

		form.typePassword(randomPassword);
		form.get.inputPassword().should('have.value', randomPassword);

		form.typePassConfirm(randomPassword);
		form.get.inputPassConfirm().should('have.value', randomPassword);

		form.typeSiteName(randomSiteName);
		form.get.inputSiteName().should('have.value', randomSiteName);
	});
});
removeLogs();