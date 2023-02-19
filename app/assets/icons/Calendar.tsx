import * as React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const xml = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0C3.94772 0 3.5 0.426396 3.5 0.952381V1.90475H2.5C1.39543 1.90475 0.5 2.75754 0.5 3.80951V18.0952C0.5 19.1472 1.39543 20 2.5 20H18.5C19.6046 20 20.5 19.1472 20.5 18.0952V3.80951C20.5 2.75754 19.6046 1.90475 18.5 1.90475L17.5 1.90476V0.952381C17.5 0.426396 17.0523 0 16.5 0C15.9477 0 15.5 0.426396 15.5 0.952381V1.90475H5.5V0.952381C5.5 0.426396 5.05228 0 4.5 0ZM2.5 5.7143H18.5V18.0952H2.5V5.7143ZM6.49997 8.09617C6.49997 8.62216 6.05225 9.04855 5.49997 9.04855C4.94768 9.04855 4.49997 8.62216 4.49997 8.09617C4.49997 7.57019 4.94768 7.14379 5.49997 7.14379C6.05225 7.14379 6.49997 7.57019 6.49997 8.09617ZM6.49997 11.9057C6.49997 12.4317 6.05225 12.8581 5.49997 12.8581C4.94768 12.8581 4.49997 12.4317 4.49997 11.9057C4.49997 11.3797 4.94768 10.9533 5.49997 10.9533C6.05225 10.9533 6.49997 11.3797 6.49997 11.9057ZM5.49997 16.6676C6.05225 16.6676 6.49997 16.2412 6.49997 15.7152C6.49997 15.1892 6.05225 14.7628 5.49997 14.7628C4.94768 14.7628 4.49997 15.1892 4.49997 15.7152C4.49997 16.2412 4.94768 16.6676 5.49997 16.6676ZM11.5 8.09617C11.5 8.62216 11.0523 9.04855 10.5 9.04855C9.94771 9.04855 9.5 8.62216 9.5 8.09617C9.5 7.57019 9.94771 7.14379 10.5 7.14379C11.0523 7.14379 11.5 7.57019 11.5 8.09617ZM10.5 12.8581C11.0523 12.8581 11.5 12.4317 11.5 11.9057C11.5 11.3797 11.0523 10.9533 10.5 10.9533C9.94771 10.9533 9.5 11.3797 9.5 11.9057C9.5 12.4317 9.94771 12.8581 10.5 12.8581ZM11.5 15.7152C11.5 16.2412 11.0523 16.6676 10.5 16.6676C9.94771 16.6676 9.5 16.2412 9.5 15.7152C9.5 15.1892 9.94771 14.7628 10.5 14.7628C11.0523 14.7628 11.5 15.1892 11.5 15.7152ZM15.5 9.04855C16.0523 9.04855 16.5 8.62216 16.5 8.09617C16.5 7.57019 16.0523 7.14379 15.5 7.14379C14.9477 7.14379 14.5 7.57019 14.5 8.09617C14.5 8.62216 14.9477 9.04855 15.5 9.04855ZM16.5 11.9057C16.5 12.4317 16.0523 12.8581 15.5 12.8581C14.9477 12.8581 14.5 12.4317 14.5 11.9057C14.5 11.3797 14.9477 10.9533 15.5 10.9533C16.0523 10.9533 16.5 11.3797 16.5 11.9057ZM15.5 16.6676C16.0523 16.6676 16.5 16.2412 16.5 15.7152C16.5 15.1892 16.0523 14.7628 15.5 14.7628C14.9477 14.7628 14.5 15.1892 14.5 15.7152C14.5 16.2412 14.9477 16.6676 15.5 16.6676ZM11.0639 4.5939C11.2206 4.61876 11.3683 4.65838 11.5122 4.70453L11.5354 4.61932C11.6449 4.22183 12 2.88703 12 2.88703C12 2.88703 11.4472 3.68677 11.1214 3.66313C10.7823 3.63799 10.5001 2.87195 10.5001 2.87195C10.5001 2.87195 10.2071 3.64006 9.85367 3.65749C9.48863 3.67643 9 2.85714 9 2.85714L9.35032 4.59714C9.35836 4.63526 9.36518 4.66813 9.37108 4.69653C9.37629 4.72166 9.38078 4.74328 9.38473 4.76191C9.86537 4.55043 10.421 4.49069 11.0639 4.5939Z" fill="#fff"/>
</svg>
`;

const Calendar = ({width = 20, height = 20}) => (
  <View style={[{width: width, height: height}]}>
    <SvgXml xml={xml} width={width} height={width} />
  </View>
);

export default Calendar;
