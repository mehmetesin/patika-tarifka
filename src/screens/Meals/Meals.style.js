import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../contants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tintsOrange,
  },
  cardContainer: {
    position: "relative",
    zIndex: -1,
    margin: 10,
    borderRadius: 20,
    overflow: "hidden",
    height: Dimensions.get("window").height / 4,
  },
  cardTitle: {
    position: "absolute",
    bottom: 0,
    textAlign: "right",
    width: "100%",
    padding: 10,
    zIndex: 10,
    color: COLORS.white,
    backgroundColor: COLORS.tintsShadeBlack,
    fontSize: 28,
    fontWeight: "bold",
  },
  cardImage: {
    height: "100%",
    resizeMode: "cover",
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
