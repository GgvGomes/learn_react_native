import { useState } from "react";
import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";

type EmojiListProps = {
    onSelect: (emoji: string) => void;
    onCloseModal: () => void;
}

export function EmojiList({onSelect, onCloseModal} : EmojiListProps){
    const [emoji] = useState([
        require('../../assets/image/emoji1.png'),
        require('../../assets/image/emoji2.png'),
        require('../../assets/image/emoji3.png'),
        require('../../assets/image/emoji4.png'),
        require('../../assets/image/emoji5.png'),
    ]);

    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
            data={emoji}
            contentContainerStyle={styles.listContainer}

            renderItem={({item,index}) => {
                return(
                    <Pressable
                        onPress={() => {
                            onSelect(item);
                            onCloseModal();
                        }}
                    >
                        <Image source={item} key={index} style={styles.image} />
                    </Pressable>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    }
});