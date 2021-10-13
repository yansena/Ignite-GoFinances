import React, {useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert } from 'react-native';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

import { 
    Container,
    Header,
    TitleWapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from './styles';

export function SignIn(){

    const { signInWithGoogle, signInWithApple } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Nao foi possivel conectar a conta Google');
        }
    }

    async function handleSignInWithApple() {
        try {
            await signInWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert('Nao foi possivel conectar a conta Apple');
        }
    }

    return(
        <Container>
            <Header>
                <TitleWapper>
                    <LogoSvg 
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />

                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                </TitleWapper>

                <SignInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton 
                        title="Entrar com Google" 
                        svg={GoogleSvg} 
                        onPress={handleSignInWithGoogle}
                    />

                    <SignInSocialButton 
                        title="Entrar com Apple" 
                        svg={AppleSvg}
                        onPress={handleSignInWithApple}
                    />

                </FooterWrapper>
            </Footer>


        </Container>
    )
}