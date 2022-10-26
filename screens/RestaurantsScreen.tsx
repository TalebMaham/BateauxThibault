import { View, Image, StyleSheet, Text, Button} from 'react-native';


export default function RestaurantScreen()
{
    return (
    
          <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
                }]}>

                {/* ligne 1 */}
    
                <View style = {[styles.uneColone, {flex : 3}]}>
                    <Text style = {{fontSize : 20, fontFamily : "bold"}}>Le bateau de Thibault </Text>
                </View>
   
                
                   {/* ligne 3 */}
                <View style = {[ styles.uneColone, {flexDirection : "row"}]}>

                    <View style =  {{flex  : 2, borderWidth : 2, borderColor : "green", }}>
                        <Button
                            title = "Homard"  
                        />
                        <Image
                               source  = {require("../assets/icon/homardRecette_icon.png")} //homard
                               style = {styles.closeButton}
                    
                            
                            />
                    </View>
                    <View style =  {{flex  : 2, borderWidth : 2, borderColor : "green", }}>
                    <Button
                            title = "St Jaques"  
                        />
                        <Image
                               source  = {require("../assets/icon/saintJacques_icon.png")} //St Jaques
                               style = {styles.closeButton}
                    
                            
                            />
                    </View>
                  
                </View>

                 {/* ligne 4 */}
                <View style = {[ styles.uneColone, {flexDirection : "row"}]}>


                     <View style =  {{flex  : 2, borderWidth : 2, borderColor : "green", }}>
                     <Button
                            title = "Bar"  
                        />
                        <Image
                               source  = {require("../assets/icon/barRecette_icon.png")} //Bar 
                               style = {styles.closeButton}
                    
                            
                            />
                     </View>

                    <View style =  {{flex : 2, borderWidth : 2, borderColor : "green", }}>
                    <Button
                            title = "Tourteau"  
                        />
                        <Image
                               source  = {require("../assets/icon/poulpe.png")} //(Tourteau poulpe.png)
                               style = {styles.closeButton}
                    
                            
                            />
                    </View>
                </View>
               
          </View>
            
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      border : '2px solid red',
      position : 'relative'
      
    },




    uneColone : {

        height : '20%',
        width: '50%',
        border : '2px solid orange',
        position : 'relative', 
    },


    closeButton: {
        height: 70,
        width: 70,
        position : 'absolute',
        left : '45%',
        top : '30%'
    
      },
  });