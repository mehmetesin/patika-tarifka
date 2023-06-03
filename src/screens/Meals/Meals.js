import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React from "react";
import styles from "./Meals.style";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";

const Meals = ({ route, navigation }) => {
  const { category } = route.params;

  const { loading, error, data } = useFetch(
    `${Config.API_MEALS_URL}${category}`
  );

  const toMealDetails = (mealId) => {
    navigation.navigate("MealDetailsScreen", { mealId });
  };

  const renderMeal = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => toMealDetails(item.idMeal)}>
        <View style={styles.cardContainer}>
          <Image style={styles.cardImage} source={{ uri: item.strMealThumb }} />
          <Text style={styles.cardTitle}>{item.strMeal}</Text>
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
          data={data.meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={renderMeal}
        />
      )}
    </SafeAreaView>
  );
};

export default Meals;
