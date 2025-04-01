import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import RepetitionExercise from '../screens/RepetitionExercise';
import DurationExercise from '../screens/DurationExercise';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
                <Stack.Screen name="DurationExercise" component={DurationExercise} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
