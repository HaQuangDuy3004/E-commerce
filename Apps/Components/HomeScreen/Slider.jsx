import { FlatList } from 'react-native-gesture-handler'
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

//2:08:58
export default function Slider({ sliderList }) {
    return (
        <View style={styles.slider}>
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false} //2:13:26
                renderItem={({ item, index }) => (
                    <View>
                        {/* Đã fix hiển thị ảnh */}
                        <Image
                            source={{ uri: item?.image }}
                            //2:12:24
                            style={{
                                width: 300, height: 180, marginRight: 12,
                                borderRadius: 8, objectFit: "fill" //ảnh lỗi không borderRadius được sẽ fix sau
                            }}
                        />
                    </View>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    slider: {
        marginTop: 20
    }
})