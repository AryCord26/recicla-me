import React from "react";
import { TouchableOpacity, Text, StyleSheet, Animated } from "react-native";
import colors from "../theme/colors";

export default function AnimatedButton({ title, onPress }) {
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    onPress && onPress();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <TouchableOpacity
        style={styles.button}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.purple,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
