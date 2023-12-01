import {View , TextInput , Button ,StyleSheet} from "react-native"

const AddTarea = ({valueTitle,valuePrice,onChangeTitle,onChangePrice,addProduct}) => {

    return     <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder="Nombre"
                    value={valueTitle}
                    onChangeText={(t)=> onChangeTitle(t)}
                    />
                    <Button title="ADD" onPress={addProduct} />
                </View>
}
const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:60,
        width:"100%",
        justifyContent:"space-around"
      },
      input:{
        borderWidth:4,
        paddingHorizontal:10,
        paddingVertical:5,
        width:150
      }
})

export default AddTarea