import * as React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../theme';

const Search = ({width = 21, height = 21, stroke = colors.black}) => (
  <View style={[{width: width, height: height}]}>
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Circle
        cx={8.62973}
        cy={7.94675}
        r={6.94675}
        stroke={stroke}
        strokeWidth={2}
      />
      <Path
        d="M14.047 14.027l4.636 4.636"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  </View>
);

export default Search;
