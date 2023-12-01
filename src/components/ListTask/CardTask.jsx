import {View , Text , Button,StyleSheet } from "react-native"

const CardTask = ({item,onModal}) => {
    return <View style={styles.CardTask}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text>{item.price} Cuarto </Text>
                <Button title="DEL" onPress={() => onModal(item)}/>
            </View> 
}
//Estilos//
const styles = StyleSheet.create({
    CardTask:{
        flexDirection:"row",
        padding:10,
        margin:10,
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:2
      }
})
export default CardTask