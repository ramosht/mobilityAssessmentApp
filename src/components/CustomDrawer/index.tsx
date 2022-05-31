import React, {useCallback} from 'react';

import * as S from './styles';

import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
import {Text} from '@components';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppColorScheme} from '@context/theme/theme.context';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const navigation = useNavigation();
  const {theme} = useAppColorScheme();
  const {appTheme, setAppTheme} = useAppColorScheme();

  const getIsActive = useCallback(
    (routeName: string) => {
      const indexOfGivingRoute = props.state.routes.findIndex(
        route => route.name.toLowerCase() === routeName.toLowerCase(),
      );

      return props.state.index === indexOfGivingRoute;
    },
    [props.state],
  );

  const toggleColorScheme = useCallback(() => {
    if (appTheme === 'dark') {
      setAppTheme('light');
    } else {
      setAppTheme('dark');
    }
  }, [appTheme, setAppTheme]);

  return (
    <S.Wrapper theme={theme}>
      <S.ListItem>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <S.ListItemContent
            active={getIsActive('home')}
            primaryColor={theme.primary}>
            <Text fontSize={14} fontWeight="Regular">
              Home
            </Text>
          </S.ListItemContent>
        </TouchableOpacity>
      </S.ListItem>
      <S.ListItem>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <S.ListItemContent
            active={getIsActive('about')}
            primaryColor={theme.primary}>
            <Text fontSize={14} fontWeight="Regular">
              About
            </Text>
          </S.ListItemContent>
        </TouchableOpacity>
      </S.ListItem>
      <S.ListItem separator>
        <S.ListItemContent primaryColor={theme.primary}>
          <Text fontSize={14} fontWeight="Regular">
            Dark Mode:
          </Text>
          <Switch
            value={appTheme === 'dark'}
            onValueChange={toggleColorScheme}
          />
        </S.ListItemContent>
      </S.ListItem>
    </S.Wrapper>
  );
};

export default CustomDrawer;
