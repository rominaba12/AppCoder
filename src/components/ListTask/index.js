import {View,FlatList,Text,Button,StyleSheet} from "react-native"
import CardTask from "./CardTask"

const ListTask  = ({products,onModal}) => {
    return <View style={styles.listContainer}>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <CardTask item={item} onModal={onModal}/> }
                />
            </View>
}
const styles = StyleSheet.create({
    listContainer : {

        width:"100%"
      }
})

export default ListTask