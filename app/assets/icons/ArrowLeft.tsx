import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ArrowLeft = ({
  width = 25,
  height = 24,
  fill = 'none',
  stroke = '#333',
}) => (
  <View style={[{width: width, height: height}]}>
    <Svg width={'100%'} height={'100%'} fill={fill}>
      <Path
        d="M4.38 12.274h15.08M10.463 18.299 4.38 12.274l6.083-6.025"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

export default ArrowLeft;
