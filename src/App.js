/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Styled from 'styled-components';

import WeatherView from '~/screens/weatherView';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = (props) => {
  return (
    <Container>
      <WeatherView />
    </Container>
  )
}

export default App;
