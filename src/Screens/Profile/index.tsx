import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';


export function Profile() {
	return (
		<View>
			<Text
				testID='text-title'
			>
				Perfil
			</Text>
			<TextInput
				testID='input-name'
				placeholder="Nome"
				autoCorrect={false}
				value="Yan"
			/>
			<TextInput
				testID='input-surname'
				placeholder="Sobrenome"
				autoCorrect={false}
				value="Sena"
			/>
			<Button
				testID='button-salve'
				title='Salvar'
				onPress={() => { }}
			/>

		</View>
	);
}