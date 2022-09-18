import React from "react";
import { render } from '@testing-library/react-native';

import { Profile } from '../../Screens/Profile';

describe('Profile Screen', () => {
	it('should have placeholder correctly in user name input', () => {
		const { getByPlaceholderText } = render(<Profile />);

		const inputName = getByPlaceholderText('Nome');

		expect(inputName).toBeTruthy();
	});

	it('should user data', () => {
		const { getByTestId } = render(<Profile />);

		const inputName = getByTestId('input-name');
		const inputSurname = getByTestId('input-surname');

		expect(inputName.props.value).toEqual('Yan');
		expect(inputSurname.props.value).toEqual('Sena');
	});

	it('should exist title render', () => {
		const { getByTestId } = render(<Profile />);

		const textTitle = getByTestId('text-title');

		expect(textTitle.props.children).toContain('Perfil')
	});

});
