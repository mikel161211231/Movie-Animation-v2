import React from 'react'
import styled from 'styled-components/native'
import { Text, View } from 'react-native';


// Los style components para usar en el componente
const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;`;

const GenreContainer = styled.View`
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    margin: 0 2px 2px 0;
    padding: 3px`;

const GenreText = styled.View`
    opacity: 0.5;
    font-size: 8px;`;

const Genre = ({genres}) => {
    return(
        <Container>
            {genres.map((genre, i) => {
                return(
                    <GenreContainer key={i.toString()}>
                        <GenreText><Text>{genre}</Text></GenreText>
                    </GenreContainer>
                )
            })}
        </Container>
    );
}

export default Genre;