import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Start from "../screens/Start";
import Initial from "../screens/Register/Initial";
import { Validate } from "../screens/Register/Validate";
import RegisterVehicle from "../screens/Register/Veiculo";
import RecoveryFirst from "../screens/Recovery/First";
import RecoveryFinish from "../screens/Recovery/Final";

const Stack = createNativeStackNavigator();

export const RoutesWithoutAuth = () => (
  <Stack.Navigator
    initialRouteName="Start"
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}
  >
    <Stack.Screen name="Start" component={Start} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Register" component={Initial} />
    <Stack.Screen name="ValidateRegister" component={Validate} />
    <Stack.Screen name="RegisterVehicle" component={RegisterVehicle} />
    <Stack.Screen name="Recovery" component={RecoveryFirst} />
    <Stack.Screen name="RecoveryFinish" component={RecoveryFinish} />
  </Stack.Navigator>
);
