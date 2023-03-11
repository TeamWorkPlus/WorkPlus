import React from "react";
import AppColors from "../../constants/AppColors";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { HomeStackProps, LoginStackProps } from "../../../types";

export default function LoginSuccessScreen({ navigation }: LoginStackProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.textWrapper}>
          <Text style={styles.successText}>가입 끄읏</Text>
          <View style={styles.successLine} />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Root");
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>시작</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 63,
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inner: {
    flex: 0.5,
    justifyContent: "space-between",
  },
  textWrapper: {
    width: 294,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  successText: {
    fontFamily: "NotoSans-Regular",
    color: AppColors.main,
    fontSize: 20,
    marginRight: 16,
  },
  successLine: {
    width: 200,
    height: 1,
    backgroundColor: AppColors.main,
  },
  buttonWrapper: {
    width: 294,
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: AppColors.main,
    borderRadius: 50,
    height: 55,
    width: 191,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "NotoSans-SemiBold",
    color: AppColors.white,
  },
});
