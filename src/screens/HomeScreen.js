import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Banner from "../components/Banner";
import AnimatedButton from "../components/AnimatedButton";
import colors from "../theme/colors";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Banner source={require("../../assets/banner.png")} />

      <Text style={styles.title}>Bem-vindo ao Recicla-me!</Text>
      <Text style={styles.subtitle}>
        Transforme resíduos em oportunidades 💚
      </Text>

      <AnimatedButton title="Cadastrar Produto" onPress={() => navigation.navigate("Produtos")} />
      <AnimatedButton title="Ver Carrinho" onPress={() => navigation.navigate("Carrinho")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.purple,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 20,
  },
});
