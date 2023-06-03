import { StyleSheet } from "react-native";
import COLORS from "../../contants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tintsOrange,
  },
  catContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.aliceBlue,
    margin: 5,
    borderRadius: 7,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: COLORS.tintsBlack,
    borderWidth: 1,
    overflow: "hidden",
  },
  catTitle: {
    color: COLORS.black,
    fontSize: 22,
    marginLeft: 5,
  },
  catImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
