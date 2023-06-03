import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import styles from "./MealDetails.style";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";

const MealDetails = ({ route }) => {
  const { mealId } = route.params;

  const { loading, error, data } = useFetch(`${Config.API_MEAL_URL}${mealId}`);
  const meal = data.meals;

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={styles.indicator}
          color="#ffa500"
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.image} source={{ uri: meal[0].strMealThumb }} />
          <Text style={styles.title}>{meal[0].strMeal}</Text>
          <Text style={styles.subTitle}>{meal[0].strArea}</Text>
          <Text style={styles.details}>{meal[0].strInstructions}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(meal[0].strYoutube)}
          >
            <Text style={styles.buttonTitle}>Watch on Youtube</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MealDetails;
