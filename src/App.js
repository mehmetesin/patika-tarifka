import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import COLORS from "./contants/Colors";

import Categories from "./screens/Categories/";
import Meals from "./screens/Meals/";
import MealDetails from "./screens/MealDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            title: "Categories",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: COLORS.white },
            headerTintColor: COLORS.tintsOrange,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="MealsListScreen"
          component={Meals}
          options={{
            title: "Meals",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: COLORS.white },
            headerTintColor: COLORS.tintsOrange,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="MealDetailsScreen"
          component={MealDetails}
          options={{
            title: "Detail",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: COLORS.white },
            headerTintColor: COLORS.tintsOrange,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
