import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Salva um valor no AsyncStorage
 * @param {string} key - A chave do item
 * @param {any} value - O valor a ser salvo (JSON)
 */
export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Erro ao salvar no AsyncStorage:", error);
  }
};

/**
 * Busca um valor no AsyncStorage
 * @param {string} key - A chave do item
 * @returns {any|null} - Retorna o valor ou null
 */
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Erro ao buscar no AsyncStorage:", error);
    return null;
  }
};

/**
 * Remove um valor do AsyncStorage
 * @param {string} key - A chave do item
 */
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Erro ao remover no AsyncStorage:", error);
  }
};

/**
 * Limpa todo o AsyncStorage
 */
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Erro ao limpar AsyncStorage:", error);
  }
};
