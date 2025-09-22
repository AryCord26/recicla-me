import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";

export default function Header({ title, onBack, onCart }) {
  return (
    <View style={styles.container}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.icon}>
          <Ionicons name="arrow-back" size={24} color={colors.purple} />
        </TouchableOpacity>
      ) : (
        <View style={styles.icon} />
      )}

      <Text style={styles.title}>{title}</Text>

      {onCart ? (
        <TouchableOpacity onPress={onCart} style={styles.icon}>
          <Ionicons name="cart" size={24} color={colors.green} />
        </TouchableOpacity>
      ) : (
        <View style={styles.icon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: colors.gray + "40",
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.purple,
  },
  icon: {
    width: 40,
    alignItems: "center",
  },
});
