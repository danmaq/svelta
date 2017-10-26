'use strict';

import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { ImagePicker } from 'expo'

import * as ini from './ini';

/** Current component style. */
const styles =
    StyleSheet.create({
        root: { alignItems: 'center', flex: 1, justifyContent: 'center' },
    });

/** Take a photo. */
const cameraAsync =
    async() => {
        const result = await ImagePicker.launchCameraAsync({});
        Alert.alert(JSON.stringify(result));
    };

/** Pick a picture in storage. */
const photoAsync =
    async() => {
        const result = await ImagePicker.launchImageLibraryAsync({});
        Alert.alert(JSON.stringify(result));
    };

/** Entry point class. */
export default class App extends React.Component {
    /** Create rendered view elements. */
    render =
        () =>
        <View style={styles.root}>
            <Text>{ini.APP_NAME} ver.{ini.APP_VERSION}</Text>
            <Button onPress={() => cameraAsync().then()}
                    title='Camera' />
            <Button onPress={() => photoAsync().then()}
                    title='Photo folder' />
            <Button onPress={() => Alert.alert('Coming soon!')}
                    title='Svelta!' />
        </View>;
}