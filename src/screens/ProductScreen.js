import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AnimatedButton from "../components/AnimatedButton";
import colors from "../theme/colors";

export default function ProductScreen() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Produto</Text>

      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>📸 Adicionar Imagem</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição"
        value={desc}
        onChangeText={setDesc}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Preço (R$)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <AnimatedButton title="Salvar Produto" onPress={() => alert("Produto salvo!")} />
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
  input: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  imagePicker: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    backgroundColor: colors.gray + "40",
    borderRadius: 12,
    marginBottom: 15,
  },
  imageText: {
    color: colors.gray,
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
});
