import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import AnimatedButton from "../components/AnimatedButton";
import colors from "../theme/colors";

export default function CartScreen() {
  const [cart, setCart] = useState([
    { id: "1", name: "Vaso Reciclado", price: "25.00" },
    { id: "2", name: "Bolsa de Tecido", price: "40.00" },
  ]);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price}</Text>
      <TouchableOpacity onPress={() => removeItem(item.id)}>
        <Text style={styles.remove}>❌</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Carrinho</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <AnimatedButton title="Finalizar Compra" onPress={() => alert("Compra concluída!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.purple,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: colors.gray,
  },
  price: {
    fontWeight: "bold",
    color: colors.green,
  },
  remove: {
    fontSize: 16,
    color: "red",
    marginLeft: 10,
  },
});
