import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Image} from 'react-native';
import estilo from '../estilo';


export default function Header(){
    return(
<LinearGradient
        colors = {['#00BFFF', '#4169E1']}
        style = {estilo.gradienteBackground}      
      >
      <Image
        source = {{ uri : 'https://logospng.org/download/puma/logo-puma-icon-1024.png'}}
        style = {estilo.image}
      />
      </LinearGradient>
      );
    }
