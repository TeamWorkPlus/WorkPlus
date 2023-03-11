import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import HomeStackNavigation from "./stacks/HomeStackNavigation";
import LoginStackNavigator from "./stacks/LoginStackNavigator";
import MyPageStackNavigation from "./stacks/MyPageStackNavigation";
import UploadStackNavigation from "./stacks/UploadStackNavigtaion";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginRoot"
        component={LoginStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeStackNavigation} />
      <Tab.Screen name="UploadTab" component={UploadStackNavigation} />
      <Tab.Screen name="MyPageTab" component={MyPageStackNavigation} />
    </Tab.Navigator>
  );
}
function NotFoundScreen() {
  return (
    <View>
      <Text>Page Not found</Text>
    </View>
  );
}
