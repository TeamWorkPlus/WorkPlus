import { createStackNavigator } from "@react-navigation/stack";
import { MyPageStackParamList } from "../../../types";
import MyPageMainScreen from "../../screens/MyPageScreens/MyPageMainScreen";

const Stack = createStackNavigator<MyPageStackParamList>();
export default function MyPageStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPageMain"
        component={MyPageMainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
