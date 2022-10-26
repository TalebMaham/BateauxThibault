import { View, Image, StyleSheet, Text, Button} from 'react-native';
import { RootTabScreenProps } from '../types';






export default function HomeScreen({ navigation } : RootTabScreenProps<'Home'>)
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
                
                   {/* ligne 2 */}
                <View style = {[ styles.uneColone, {flexDirection : "row"}]}>

                    <View style =  {{flex  : 1, borderWidth : 2, borderColor : "green", }}>
                     
                         <Button
                            title = "Produits et promotions"  
                        />
                           <Image
                               source  = {require("../assets/icon/poisson.png")} 
                               style = {styles.closeButton}
                    
                            
                            />

                    </View>
                </View>
                
                   {/* ligne 3 */}
                <View style = {[ styles.uneColone, {flexDirection : "row"}]}>

                    <View style =  {{flex  : 2, borderWidth : 2, borderColor : "green", }}>
                        <Button
                            title = "Bateaux"  
                        />
                        <Image
                               source  = {require("../assets/icon/ancre.png")} 
                               style = {styles.closeButton}
                    
                            
                            />
                    </View>
                    <View style =  {{flex  : 2, borderWidth : 2, borderColor : "green", }}>
                    <Button
                            title = "Restaurants" 
                            onPress={() => navigation.navigate('Restaurants')}   
                        />
                        <Image
                               source  = {require("../assets/icon/restaurant.png")} 
                               style = {styles.closeButton}
                    
                            
                            />
                    </View>
                  
                </View>

                 {/* ligne 4 */}
                <View style = {[ styles.uneColone, {flexDirection : "row"}]}>


                     <View style =  {{flex  : 2, borderWidth : 2, borderColor : "green", }}>
                     <Button
                            title = "Recettes"
                            onPress={() => navigation.navigate('Recettes')}  
                        />
                        <Image
                               source  = {require("../assets/icon/recette.png")} 
                               style = {styles.closeButton}
                    
                            
                            />
                     </View>

                    <View style =  {{flex : 2, borderWidth : 2, borderColor : "green", }}>
                    <Button
                            title = "Contact"  
                        />
                        <Image
                               source  = {require("../assets/icon/tourteau.png")} 
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
        height: 50,
        width: 50,
        position : 'absolute',
        left : '45%',
        top : '30%'
    
      },
  });