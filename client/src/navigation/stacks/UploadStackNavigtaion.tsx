import { createStackNavigator } from "@react-navigation/stack";
import { UploadStackParamList } from "../../../types";
import UploadMainScreen from "../../screens/UploadScreens/UploadMainScreen";

const Stack = createStackNavigator<UploadStackParamList>();
export default function UploadStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UploadMain"
        component={UploadMainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
