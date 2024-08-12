import {View, Text} from 'react-native';
import React, {useState} from 'react';

//
import CounterView from '../componets/CounterView';
import CounterControllers from '../componets/CounterControllers';

export default function CounterScreen({customValueParentState}) {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CounterView counterValue={counter} />
      <CounterControllers
        setCounterValue={setCounter}
        customValueParentState={customValueParentState}
      />
    </View>
  );
}
