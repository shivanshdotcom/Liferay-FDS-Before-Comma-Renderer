import type {FDSTableCellHTMLElementBuilder} from '@liferay/js-api/data-set';


const fdsCellRenderer: FDSTableCellHTMLElementBuilder = ({value}) => {
	const element = document.createElement('div');

	const stringValue = value != null ? value.toString() : '';

	const commaIndex = stringValue.indexOf(',');

	element.textContent =
		commaIndex !== -1
			? stringValue.substring(0, commaIndex).trim()
			: stringValue;

	return element;
};

export default fdsCellRenderer;
