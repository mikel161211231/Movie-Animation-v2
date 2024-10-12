import { Dimensions } from "react-native";


// controlar las dimensiones de pantalla, el espaciado entre tarjetas y el tamaño de los elementos ajustándolos inicialmente al 75%.
const {width, height} = Dimensions.get('window');
export const SPACING = 10;
export const ITEM_SIZE = width * 0.75;

export const SPACER_ITEM_SIZE = (width -ITEM_SIZE)/2