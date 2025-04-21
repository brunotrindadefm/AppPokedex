import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './Loader.styles';

const SimpleLoader = () => (
    <View style={styles.container}>
        <ActivityIndicator size={60} color="#ff8c00" />
    </View>
);

export default SimpleLoader;
