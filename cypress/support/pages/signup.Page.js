class Formulario {
	get = {
		inputName: () => cy.get('[id="mat-input-0"]'),
		inputSureName: () => cy.get('[id="mat-input-1"]'),
		inputMail: () => cy.get('[id="mat-input-2"]'),
		inputPassword: () => cy.get('[id="mat-input-3"]'),
		inputPassConfirm: () => cy.get('[id="mat-input-4"]'),
		inputSiteName: () => cy.get('[id="mat-input-5"]'),
	};

	typeName(randomName) {
		randomName && this.get.inputName().type(randomName, { force: true });
	}
	typeSureName(randomLastName) {
		randomLastName && this.get.inputSureName().type(randomLastName, { force: true });
	}
	typeMail(randomMail) {
		randomMail && this.get.inputMail().type(randomMail, { force: true });
	}
	typePassword(randomPassword) {
		randomPassword && this.get.inputPassword().type(randomPassword, { force: true });
	}
	typePassConfirm(randomPassword) {
		randomPassword && this.get.inputPassConfirm().type(randomPassword, { force: true });
	}
	typeSiteName(randomSiteName) {
		randomSiteName && this.get.inputSiteName().type(randomSiteName, { force: true });
	}
}
export const form = new Formulario();