import { View, Text, Button } from   'react-native';
import { StyleSheet } from 'react-native';




export default function BonjourScreen()
{
    return (
    
          <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
                }]}>
                <View style = {{flex : 2, borderColor: "2px solid red", height : "50%"}}>Partie 1</View>
                <View style = {{flex : 2, borderColor : "2px solid green "}}>Partie 2</View>
                <View style = {{flex : 2, borderColor : "2px solid green "}}>Partie 3</View>
          </View>
            
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      border : '2px solid red',


    
      
    },
  });