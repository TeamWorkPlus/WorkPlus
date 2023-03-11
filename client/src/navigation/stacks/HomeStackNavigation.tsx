import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParamList } from "../../../types";
import HomeMainScreen from "../../screens/HomeScreens/HomeMainScreen";

const Stack = createStackNavigator<HomeStackParamList>();
export default function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeMainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
