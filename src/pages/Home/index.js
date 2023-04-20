import React from "react";
import {View, Text, StyleSheet, ScrollView,Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import Shoes from "../../component/Shoes";


export default function Home(){
const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                source={require('../../assets/banner.png')}
                style={styles.image}/>

            <View style={styles.textContainer}>
                <Text style={styles.text}>TÊNIS</Text>
                <Text style={[styles.text ,{color:'#CECECE'}]}>-</Text>
                <Text style={[styles.text, {color:'#CECECE'}]}>MASCULINO</Text>
                <TouchableOpacity style={{
                    position:'absolute',
                    right: 0,
                    alignSelf: 'center'}}>
                <MaterialIcons 
                name="filter-list"
                size= {24}
                color="#000"
                />
               </TouchableOpacity>
            </View>
            </View>
            <View style={styles.line} />

            <ScrollView> 
           
            <Text style={styles.text}>LANÇAMENTO</Text> 
            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
            <Shoes img={require('../../assets/1.png')} 
                   cost='R$140,90' 
                   onClick={()=> navigation.navigate('Detail')}>
                   Nike Air Max 
                   </Shoes> 
            <Shoes img={require('../../assets/2.png')}
                   cost='R$280,90' 
                   onClick={()=> navigation.navigate('Detail')}>
                   Nike Botinha Air</Shoes>  
            </View>
           
           
            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
            <Shoes img={require('../../assets/3.png')} cost='R$90,90'>Nike epic Max </Shoes> 
            <Shoes img={require('../../assets/4.png')} cost='R$120,90'>Nike squidward Air</Shoes>  
            </View>
                     
            
            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
            <Shoes img={require('../../assets/5.png')} cost='R$540,90'>Nike Air cott Max </Shoes> 
            <Shoes img={require('../../assets/6.png')} cost='R$380,90'>Nike Testt Air</Shoes>  
            </View>
            </ScrollView>       








        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
},
header:{
    marginBottom: 8
},
Image:{
    width:'100%'
},
textContainer:{
    flexDirection:'row',
    marginVertical:'5%',
    marginHorizontal:'5%'
},
text:{
    fontSize: 20,
    marginHorizontal: '1%'
},
line:{
    borderBottomColor:'#D8D8D8',
    borderBottomWidth:2
}


});