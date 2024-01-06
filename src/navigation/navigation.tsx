import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Orders from "../pages/Orders";



export type RootStackParamsList = {
    Orders: undefined,
}

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Orders" component={Orders}></RootStack.Screen>
        </RootStack.Navigator>
    )
}