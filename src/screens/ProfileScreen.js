import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AnimatedButton from "../components/AnimatedButton";
import colors from "../theme/colors";

export default function ProfileScreen() {
  const [name, setName] = useState("Usuário Recicla-me");
  const [email, setEmail] = useState("usuario@email.com");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={image ? { uri: image } : require("../../assets/default-profile.png")}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <AnimatedButton title="Salvar Perfil" onPress={() => alert("Perfil atualizado!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: colors.gray + "40",
  },
  input: {
    backgroundColor: colors.white,
    width: "100%",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 15,
  },
});
