import React from "react";
import Dot from "../../component/Dot";
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";
import Footer from "../../component/Footer";

export default function Detail({navigation}){

    navigation.setOptions(
   {
    headerTitle: 'Nike Downshifter 10'
    })

    return(
        <ScrollView style={styles.container}>
            <Image
            source = {require('../../assets/detail.png')}
            style={styles.image}
            resizeMode = "cover" 
            />

        <View>
        <View>
        <Text style={[styles.title,  {fontSize:24} ]}>R$ 280,00</Text>
        </View>
        <View opacity={0.4}>
        <Text style={[styles.title,  {fontSize:24} ]}>Nike Downshifter 10</Text>
        </View>

        <View style={styles.dotContainer}>
             <Dot color = "#2379f4"/>
             <Dot color = "#fb6e53"/>
             <Dot color = "#ddd"/>
             <Dot color = "#000"/>
        </View>

<View style={{flexDirection:'row', width: '100%'}}>
    <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
    <SizeButton bgColor="#17181a" color="#fff">40</SizeButton>
    <SizeButton>37</SizeButton>
    <SizeButton>39</SizeButton>
    <SizeButton>42</SizeButton>    
    </ScrollView>
</View>

<View style={styles.textContent}>
    <Text style={styles.textTitle}>
        Nike Downshifter 10
    </Text>

    <Text style={styles.textContent}>
    Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético, com mesh no calcanhar, proporciona suporte e circulação de ar, forro 
    </Text>

    <Text style={styles.textlist}>
        - Categoria : Amortecedor
    </Text>

    <Text style={styles.textlist}>
        - Material : Mesh
    </Text>
</View>

<Button/>


<View style={styles.line}/>


<Footer/>
</View>
                
   </ScrollView>




/// configura de estilos///



);
}
const styles = StyleSheet.create({

container:{
flex:1,
width: '100%',
backgroundColor: "#fff",
},
image:{
    width:'100%'
},
title:{
//fonte diferente tem q procurar
paddingHorizontal:'2%'
},
dotContainer:{
    flexDirection:'row',
    marginVertical: '7%'
},
textContent:{
    fontSize:16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
},
textTitle:{
    fontSize: 22,
    lineHeight: 25,
    marginVertical:'2%' 

}, textlist:{
    fontSize:16,
    lineHeight:25,
},
line:{
    borderWidth: 1,
    borderBottomColor:'#DDD', 
    marginVertical: '2%'

}
});