import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default function DurationExercise({ route, navigation }) {
    const { name } = route.params;
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    React.useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => setTime(prev => prev + 1), 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>{name}</Text>
            <Text style={{ fontSize: 48 }}>{time}s</Text>
            <Button title={running ? "Pause" : "Start"} onPress={() => setRunning(!running)} />
            <Button title="Reset" onPress={() => { setTime(0); setRunning(false); }} />
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}
