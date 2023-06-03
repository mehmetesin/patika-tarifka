import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import styles from "./Categories.style";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";

const Categories = ({ navigation }) => {
  const { loading, error, data } = useFetch(Config.API_CATEGORIES_URL);

  const toMeals = (category) => {
    navigation.navigate("MealsListScreen", { category });
  };

  const renderCategories = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => toMeals(item.strCategory)}>
        <View style={styles.catContainer}>
          <Image
            source={{ uri: item.strCategoryThumb }}
            style={styles.catImage}
          />
          <Text style={styles.catTitle}>{item.strCategory}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" style={styles.indicator} color="#fff" />
      ) : (
        <FlatList
          data={data.categories}
          keyExtractor={(item) => item.idCategory}
          renderItem={renderCategories}
        />
      )}
    </SafeAreaView>
  );
};

export default Categories;
