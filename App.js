import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);


  return (
    <View style={styles.container}>
      <Text>First app by Aleksei Seletckii</Text>
      <StatusBar style="auto" />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000'
  },
});
