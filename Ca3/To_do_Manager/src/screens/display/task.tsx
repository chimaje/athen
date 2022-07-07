import React from 'react';
 import {View,Text,StyleSheet} from 'react-native';

 const Viewtask = (props: { text: any; })=> {
    return(
        <View style = {styles.item}>
            <View style={styles.itemLeft}>
                <View style = {styles.square}></View>
                <Text style = {styles.itemText}>{props.text}</Text>{/*this displays a single item when props is given */}
            </View>
            <View style= {styles.circular}>

            </View>
        </View>
    )
 }
 const styles = StyleSheet.create({
        item:{ 
            backgroundColor :'lightblue' , 
            padding :15,
            borderRadius: 10,
            flexDirection:'row',
            alignItems : 'center',
            justifyContent:'space-between',
            marginBottom: 20,
        },
        itemLeft : {
            flexDirection: 'row',
            allignItems : 'center',
            flexWrap :'wrap'
        },
        square : {
            width: 24,
            height:24,
            background:'#FFF',
            opacity : 0.4,
            borderRadius : 5,
            marginRight : 16,
        },
        itemText : {
            maxWidth :'90%',
        },
        circular : {
            width: 12,
            height:12,
            borderColour:'#F31414',
            borderWidth : 4,
            borderRadius:5,
        },
 })
 export default Viewtask;