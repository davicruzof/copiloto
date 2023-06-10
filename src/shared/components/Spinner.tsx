import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const Spinner = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40
      }}
    >
      <ActivityIndicator size="large" color="#2C94F4" />
    </View>
  );
}
