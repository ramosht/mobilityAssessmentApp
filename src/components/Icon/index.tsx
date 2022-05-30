import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useTheme} from '@react-navigation/native';

type IconProps = {
  family:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialIcons'
    | 'MaterialCommunityIcons'
    | 'Octicons'
    | 'Zocial'
    | 'SimpleLineIcons';
  size?: number;
  color?: string;
  name: string;
};

const Icon: React.FC<IconProps> = ({color, family, size, name}) => {
  const theme = useTheme();

  return (
    <>
      {family === 'AntDesign' && (
        <AntDesign name={name} color={color || theme.colors.text} size={size} />
      )}

      {family === 'Entypo' && (
        <Entypo name={name} color={color || theme.colors.text} size={size} />
      )}

      {family === 'EvilIcons' && (
        <EvilIcons name={name} color={color || theme.colors.text} size={size} />
      )}

      {family === 'Feather' && (
        <Feather name={name} color={color || theme.colors.text} size={size} />
      )}

      {family === 'FontAwesome' && (
        <FontAwesome
          name={name}
          color={color || theme.colors.text}
          size={size}
        />
      )}

      {family === 'FontAwesome5' && (
        <FontAwesome5
          name={name}
          color={color || theme.colors.text}
          size={size}
        />
      )}

      {family === 'Fontisto' && (
        <Fontisto name={name} color={color || theme.colors.text} size={size} />
      )}

      {family === 'Foundation' && (
        <Foundation
          name={name}
          color={color || theme.colors.text}
          size={size}
        />
      )}

      {family === 'Ionicons' && (
        <Ionicons name={name} color={color || theme.colors.text} size={size} />
      )}

      {family === 'MaterialIcons' && (
        <MaterialIcons
          name={name}
          color={color || theme.colors.text}
          size={size}
        />
      )}

      {family === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons
          name={name}
          color={color || theme.colors.text}
          size={size}
        />
      )}

      {family === 'Octicons' && (
        <Octicons name={name} color={color || theme.colors.text} size={size} />
      )}

      {family === 'Zocial' && (
        <Zocial name={name} color={color || theme.colors.text} size={size} />
      )}

      {family === 'SimpleLineIcons' && (
        <SimpleLineIcons
          name={name}
          color={color || theme.colors.text}
          size={size}
        />
      )}
    </>
  );
};

export default Icon;
