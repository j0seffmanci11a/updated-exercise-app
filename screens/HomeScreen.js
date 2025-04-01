import React from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

const exercises = [
    { id: '1', name: 'Push-Ups', type: 'RepetitionExercise' },
    { id: '2', name: 'Running', type: 'DurationExercise' }
];

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={exercises}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Button 
                        title={item.name} 
                        onPress={() => navigation.navigate(item.type, { name: item.name })} 
                        containerStyle={{ marginVertical: 10 }}
                    />
                )}
            />
        </View>
    );
}
