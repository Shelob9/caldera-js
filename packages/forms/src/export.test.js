import {
	CalderaForm,
	CalderaGrid,
	FormClient,
	formClientFactory,
	HorizontalForm,
	FormEditor,
	getCf2Token,
	submitFormCf2,
	useCf2FormTokens,
	handleFormSubmitCf2
} from '@calderajs/forms';


describe('Exports', () => {
	it('exports CalderaForm', () => {
		expect(typeof CalderaForm).toBe('function');
	});

	it('exports CalderaGrid', () => {
		expect(typeof CalderaGrid).toBe('function');
	});

	it('exports formClientFactory', () => {
		expect(typeof formClientFactory).toBe('function');
	});

	it('exports FormClient', () => {
		expect(typeof FormClient).toBe('function');
	});
	it('exports HorizontalForm', () => {
		expect(typeof HorizontalForm).toBe('function');
	});
	it('exports FormEditor', () => {
		expect(typeof FormEditor).toBe('function');
	});
	it('exports getCf2Token', () => {
		expect(typeof getCf2Token).toBe('function');
	});
	it('exports submitFormCf2', () => {
		expect(typeof submitFormCf2).toBe('function');
	});
	it('exports useCf2FormTokens', () => {
		expect(typeof useCf2FormTokens).toBe('function');
	});it('exports handleFormSubmitCf2', () => {
		expect(typeof handleFormSubmitCf2).toBe('function');
	});
});
