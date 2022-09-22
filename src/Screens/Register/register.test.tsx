import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { Register } from "./index";
import theme from "../../global/styles/theme";
import { NavigationContainer } from "@react-navigation/native";


const Providers: React.FC = ({ children }) => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </NavigationContainer>
);

describe('Register Screen', () => {
  it('should be open modal when button is clicked', () => {
    const { getByTestId } = render(
      <Register />,
      {
        wrapper: Providers
      }
    );

    const categoryModal = getByTestId('modal-category');
    const buttonCategory = getByTestId('button-category');

    fireEvent.press(buttonCategory);

    expect(categoryModal.props.visible).toBeTruthy();
  })
})