import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import estilo from '../estilo';
import { View, TextInput, TouchableOpacity, Text} from 'react-native';

export default function Footer(){
    return(
    <View  style = {estilo.footer}>
        <TouchableOpacity>
            <Text style = {estilo.textFooter}>Redefinir Senha</Text>
            </TouchableOpacity>
            <Text style = {estilo.textFooter}>     |     </Text>
            <TouchableOpacity>
            <Text style = {estilo.textFooter}>Criar Conta</Text>
            </TouchableOpacity>
            

          </View>
    );
}