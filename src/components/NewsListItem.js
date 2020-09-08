import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NewsListItem = props => {
    const { notice, onPressItem } = props;
    const logo = notice.img;

    return (
        <TouchableOpacity onPress={
            () => { onPressItem({ notice }); }
        }>
            <View style={styles.barra}>
                <Image
                    style={styles.logo}
                    source={{ uri: logo }}
                />
                <Text style={styles.texto}>{notice.notice}
                </Text>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    barra: {
        margin: 10,
        height: 120,
        backgroundColor: "#46727a",
        //borderBottomWidth: 1,
        //borderBottomColor: "#bbb",
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    texto: {
        fontSize: 15,
        paddingLeft: 15,
    },
    logo: {
        width: 90,
        height: 90,
        marginLeft: 10,
    },
})

export default NewsListItem;