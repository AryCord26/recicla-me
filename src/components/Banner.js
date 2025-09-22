import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Banner({ source }) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.banner} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
    marginBottom: 15,
    borderRadius: 12,
    overflow: "hidden",
  },
  banner: {
    width: "100%",
    height: "100%",
  },
});
