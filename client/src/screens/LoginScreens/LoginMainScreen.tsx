import React from "react";
import AppColors from "../../constants/AppColors";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LoginStackProps } from "../../../types";

export default function LoginMainScreen({ navigation }: LoginStackProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleSub}>쉬운</Text>
        <Text style={styles.titleSub}>일정·수입관리</Text>
        <View style={styles.titleMainWrapper}>
          <Text style={styles.titleMain}>PLUS</Text>
          <View style={styles.titleDot} />
        </View>
      </View>
      <View>
        <View style={styles.signUpWrapper}>
          <Text style={styles.signUpText}>3초 땡, 가입</Text>
          <View style={styles.signUpLine} />
        </View>
        <View style={styles.snsWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SuccessLogin");
            }}
          >
            <View style={styles.sns}></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.sns}></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.sns}></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.sns}></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 257,
    backgroundColor: AppColors.main,
    paddingLeft: 49,
    paddingBottom: 63,
    justifyContent: "space-between",
  },
  titleWrapper: {
    width: 257,
    display: "flex",
    flexDirection: "column",
  },
  titleSub: {
    fontFamily: "SCDream-3",
    fontSize: 40,
    color: AppColors.white,
  },
  titleMainWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  titleMain: {
    lineHeight: 60,
    color: AppColors.white,
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  titleDot: {
    width: 8,
    height: 8,
    backgroundColor: AppColors.sub,
    marginBottom: 16,
    marginLeft: 4,
  },
  signUpWrapper: {
    width: 294,
    height: 27,
    marginBottom: 22,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  signUpText: {
    fontFamily: "NotoSans-Regular",
    fontSize: 20,
    color: AppColors.white,
    marginRight: 16,
  },
  signUpLine: {
    height: 1,
    backgroundColor: AppColors.white,
    width: 180,
  },
  snsWrapper: {
    width: 294,
    height: 55,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sns: {
    width: 55,
    height: 55,
    backgroundColor: AppColors.white,
    borderRadius: 50,
  },
});
