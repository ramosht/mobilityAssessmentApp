import React, {useCallback} from 'react';

import * as S from './styles';

import {useNavigation, useTheme} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
import {Text} from '@components';
import {View} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const navigation = useNavigation();
  const theme = useTheme();

  const getIsActive = useCallback(
    (routeName: string) => {
      const indexOfGivingRoute = props.state.routes.findIndex(
        route => route.name.toLowerCase() === routeName.toLowerCase(),
      );

      return props.state.index === indexOfGivingRoute;
    },
    [props.state],
  );

  return (
    <View>
      <S.ListItem>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <S.ListItemContent
            active={getIsActive('home')}
            primaryColor={theme.colors.primary}>
            <Text>Home</Text>
          </S.ListItemContent>
        </TouchableOpacity>
      </S.ListItem>
      <S.ListItem>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <S.ListItemContent
            active={getIsActive('about')}
            primaryColor={theme.colors.primary}>
            <Text>About</Text>
          </S.ListItemContent>
        </TouchableOpacity>
      </S.ListItem>
      <S.ListItem>
        <S.ListItemContent primaryColor={theme.colors.primary}>
          <Text>Dark Mode:</Text>
          <Switch />
        </S.ListItemContent>
      </S.ListItem>
    </View>
  );
};

export default CustomDrawer;
