import { createStackNavigator } from "@react-navigation/stack";
import { LoginStackParamList } from "../../../types";
import LoginMainScreen from "../../screens/LoginScreens/LoginMainScreen";
import LoginSuccessScreen from "../../screens/LoginScreens/LoginSuccessScreen";

const Stack = createStackNavigator<LoginStackParamList>();
export default function LoginStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginMainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessLogin"
        component={LoginSuccessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
