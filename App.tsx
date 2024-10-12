/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// IMPORTS necesarias para renderizar
import React, {useEffect, useState, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {Animated, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import {Colors,} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import Rating from './src/components/Rating';
import Genre from './src/components/Genre';
import { getMovies } from './src/api';
import * as CONSTANTS from './src/constants/constants';
import { movies } from './src/assets/data.js';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const scrollX = useRef(new Animated.Value(0)).current;
  
  return (
    
      <Container>
    
      <StatusBar />
      <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            data={movies} 
            keyExtractor={item => item.key}
            horizontal
            snapToInterval={CONSTANTS.ITEM_SIZE}
            decelerationRate={0}
            contentContainerStyle={{
              alignItems: 'center'
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true}
            )}
            scrollEventThrottle={16}
            renderItem={({item, index}) =>{
              const inputRange = [
                (index -1)* CONSTANTS.ITEM_SIZE,
                index * CONSTANTS.ITEM_SIZE,
                (index +1)* CONSTANTS.ITEM_SIZE
              ]

              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [0, -50, 0]
              })

              return (
                <PosterContainer>
                  <Poster as={Animated.View} style={{transform: [{translateY}]}}>
                    <PosterImage source={{uri: item.posterPath}} />
                    <PosterTitle numberOfLines={1}>{item.originalTitle}</PosterTitle>
                    <Rating rating={item.voteAverage} />
                    <Genre genres={item.genres}/>
                    <PosterDescription numberOfLines={5}>{item.description}</PosterDescription>
                  </Poster>
                </PosterContainer>
              )
            }}
            />

      </Container>
      
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// Definir los STYLED COMPONENTS
const Container = styled.View`
  flex: 1;`;
const PosterContainer = styled.View`
  width: ${CONSTANTS.ITEM_SIZE}px;`;
const Poster = styled.View`
  margin-horizontal: ${CONSTANTS.SPACING}px;
  padding: ${CONSTANTS.SPACING*2}px;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 10px;`;
const PosterImage = styled.Image`
  width: 100%;
  height: ${CONSTANTS.ITEM_SIZE *1.2}px;
  resize-mode: cover;
  border-radius: 10px;
  margin: 0 0 10px 0;`;
const PosterTitle = styled.Text`
  font-size: 18px;`;
const PosterDescription = styled.Text`
  font-size: 12px;`;
  

export default App;
