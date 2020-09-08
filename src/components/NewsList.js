import React from 'react';
import { StyleSheet } from 'react-native';

import NewsListItem from './NewsListItem';
import { ScrollView } from 'react-native-gesture-handler';

const NewsList = props => {
    const { news, onPressItem } = props;

    const items = news.map((item, index) => {
        return <NewsListItem
            notice={item}
            onPressItem={onPressItem}
            key={index}
        />
    })

    return (
        <ScrollView style={styles.container}>
            {items}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2f3140'
    }
});

export default NewsList;