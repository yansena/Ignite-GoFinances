import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";


import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export function Button({ 
  title,
  onPress,
  ...rest 
}: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
