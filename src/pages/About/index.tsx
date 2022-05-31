import React, {useCallback} from 'react';

import {useAppColorScheme} from '@context/theme/theme.context';

import {Icon, Text} from '@components';
import DefaultPage from '../../templates/DefaultPage';

import ProfilePicture from '../../../assets/img/pp.jpg';

import * as S from './styles';
import {Alert, Linking} from 'react-native';

function About() {
  const {theme} = useAppColorScheme();

  const handleRedirection = useCallback((url: string) => {
    Linking.openURL(url).catch(() => {
      Alert.alert(
        'Ooops...',
        'Something unexpected just happened :( wait a few moments and try again.',
        [{text: 'Ok', onPress: () => null}],
      );
    });
  }, []);

  const handleLinkPress = useCallback(
    (url: string) => {
      Alert.alert(
        'Before we continue',
        // eslint-disable-next-line prettier/prettier
        'You\'re being redirected to an external Link. Do you want to proceed?',
        [
          {text: 'Cancel', onPress: () => null},
          {text: 'Continue', onPress: () => handleRedirection(url)},
        ],
      );
    },
    [handleRedirection],
  );

  return (
    <DefaultPage>
      <S.Wrapper>
        <S.Title color={theme.primary} italic fontWeight="Semibold">
          About the Project
        </S.Title>
        <Text fontSize={18} fontWeight="Medium">
          {
            // eslint-disable-next-line prettier/prettier
            'This idea behind this project came when I had to develop and app as part of a screening process for CarTrawler. At the first version, I faced some challenges that I didn\'t had much success in overcome, so I decided to rewrite the app, focusing on solving the problems I had previously.'
          }
        </Text>

        <S.Title color={theme.primary} italic fontWeight="Semibold">
          About me
        </S.Title>
        <S.ProfilePictureWrapper>
          <S.ProfilePicture size={120} source={ProfilePicture} />
        </S.ProfilePictureWrapper>
        <Text fontSize={18} fontWeight="Medium">
          {
            // eslint-disable-next-line prettier/prettier
            'I\'m Guilherme Ramos, a frontend engineer from Brazil, currently living in Cork, Ireland. You can check more details about me in the links below:'
          }
        </Text>

        <S.Links>
          <S.LinkWrapper
            onPress={() =>
              handleLinkPress('https://www.linkedin.com/in/ramosht/')
            }>
            <Icon
              size={32}
              color={theme.primary}
              family="AntDesign"
              name="linkedin-square"
            />
          </S.LinkWrapper>
          <S.LinkWrapper
            onPress={() => handleLinkPress('https://twitter.com/ramosht_')}>
            <Icon
              size={32}
              color={theme.primary}
              family="AntDesign"
              name="twitter"
            />
          </S.LinkWrapper>
          <S.LinkWrapper
            onPress={() => handleLinkPress('https://github.com/ramosht')}>
            <Icon
              size={32}
              color={theme.primary}
              family="AntDesign"
              name="github"
            />
          </S.LinkWrapper>
          <S.LinkWrapper
            onPress={() =>
              handleLinkPress('https://instagram.com/theguilhermeramos')
            }>
            <Icon
              size={32}
              color={theme.primary}
              family="AntDesign"
              name="instagram"
            />
          </S.LinkWrapper>
        </S.Links>
      </S.Wrapper>
    </DefaultPage>
  );
}

export default About;
