import React from 'react';
import { View } from 'react-native';
import estilo from './src/estilo';
import Header from './src/components/header';
import Box from './src/components/box';
import Footer from './src/components/footer';


export default function App() {
  return (
    <View style = {estilo.container}>

    <Header></Header>

    <Box></Box> 

    <Footer></Footer>

    </View>
    
  );
}



