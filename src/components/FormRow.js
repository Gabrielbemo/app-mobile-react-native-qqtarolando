import React from 'react';
import { View, StyleSheet } from 'react-native';

const FormRow = (props) => {
    const { children } = props;

    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3b474a",
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
        width: 200
    }
})

export default FormRow;