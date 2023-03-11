import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreenProps } from "@react-navigation/stack";
/* Param List*/
export type LoginStackParamList = {
  Login: undefined;
  SuccessLogin: undefined;
  Root: undefined;
};
export type HomeStackParamList = {
  HomeMain: undefined;
};
export type MyPageStackParamList = {
  MyPageMain: undefined;
};
export type UploadStackParamList = {
  UploadMain: undefined;
};

/* Stack Props */
export type LoginStackProps = StackScreenProps<LoginStackParamList>;

export type HomeStackProps = StackScreenProps<HomeStackParamList>;

export type MyPageStackProps = StackScreenProps<MyPageStackParamList>;

export type UploadStackProps = StackScreenProps<UploadStackParamList>;
