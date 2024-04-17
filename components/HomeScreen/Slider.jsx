import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

//2:08:58
export default function Slider(sliderList) {
  return (
    <View style={styles.slider}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicatior={false} // 2:13:26
        renderItem={({item,index})=>(
            <View>
                {/*2:11:14 ko hiện được ảnh*/ }
                <Image
                    source={require('./../../assets/Image/6505894.jpg')}
                    //2:12:24
                    style={{ width: 48, height: 48,}} //mr-3 rounded-lg object-contain 
                />
            </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    slider:{
        // mt-5 2:13:07
    }
})