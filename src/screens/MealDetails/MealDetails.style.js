import COLORS from "../../contants/Colors";
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  image: {
    width: Dimensions.get("window").width,
    aspectRatio: 1.4,
    resizeMode: "cover",
  },
  title: {
    marginTop: 5,
    marginLeft: 5,
    color: COLORS.tintsBrown,
    fontSize: 28,
    fontWeight: "bold",
  },
  subTitle: {
    marginBottom: 10,
    marginLeft: 5,
    color: COLORS.tintsBrown,
    fontSize: 22,
  },
  details: {
    textAlign: "justify",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderTopColor: COLORS.darkgray,
    borderTopWidth: 1,
    fontSize: 16,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.tintsRed,
    margin: 10,
    borderRadius: 7,
    paddingVertical: 10,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
