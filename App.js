import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useState } from "react"
import uuid from 'react-native-uuid'
import Title from './src/components/Title';
import AddTarea from './src/components/AddTarea';
import ListTask from './src/components/ListTask';
import ModalDelete from "./src/components/ModalClear"

const App = () => {
  const [newTitleProduct,setNewTitleProduct] = useState("")
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handlerAddProduct = () => {

    const newProduct = {
      id:uuid.v4(),
      title:newTitleProduct,
    }
    console.log(newProduct)
    setProducts(current => [...current,newProduct] )
    setNewTitleProduct("")
}
const handlerModal = (item) => {
  setProductSelected(item)
  setModalVisible(true)
}
const handlerDeleteProduct = () => {
setProducts(current => current.filter(product => product.id !== productSelected.id))
setModalVisible(false)
}

return (
    <View style={styles.container}>
      <Title />
      <AddTarea
                      valueTitle = {newTitleProduct}
                      onChangeTitle = {setNewTitleProduct}
                      addProduct = {handlerAddProduct}
      />
               <ListTask
                products = {products}
                onModal = {handlerModal}
              />
              <ModalDelete
                product = {productSelected}
                visible={modalVisible}
                onModal = {handlerModal}
                onDelete={handlerDeleteProduct}
              />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default App