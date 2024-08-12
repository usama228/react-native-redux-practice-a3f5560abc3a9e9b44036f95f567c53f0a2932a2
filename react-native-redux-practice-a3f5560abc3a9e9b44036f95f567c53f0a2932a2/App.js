import {View, Text} from 'react-native';
import React, {useState} from 'react';

//
import CounterScreen from './src/screens/CounterScreen';
import CounterCustomSet from './src/componets/CounterCustomSet';

export default function App() {
  const [customValueParentState, setCustomValueParentState] = useState(1);

  return (
    <View style={{flex: 1}}>
      <CounterScreen customValueParentState={customValueParentState} />
      <CounterCustomSet setCustomValueParentState={setCustomValueParentState} />
    </View>
  );
}
