import React from 'react'
import {
  View,
  Text,
  Linking,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import { images, icons, COLORS, SIZES, FONTS } from '../constants'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Home = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        ...styles.shadow,
        ...styles.container,
      }}
    >
      <ImageBackground
        source={images.banner}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            padding: 80,
            borderRadius: SIZES.radius,
            ...styles.shadow,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.h1,
              color: COLORS.white,
            }}
          >
            My Space
          </Text>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.body5,
              width: '100%',
              color: COLORS.white,
              backgroundColor: COLORS.lightGrayop,
            }}
          >
            WEB DEVELOPER | PROGRAMMER
          </Text>
        </View>
        {/* social media icon */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              ...styles.shadow,
            }}
          >
            <Ionicons
              name='logo-instagram'
              onPress={() => Linking.openURL('http://google.com')}
              style={{
                fontSize: 'large',
                padding: '20px',
              }}
            />
            <Ionicons
              name='logo-twitter'
              onPress={() => Linking.openURL('http://google.com')}
              style={{
                fontSize: 'large',
                padding: '20px',
              }}
            />
            <Ionicons
              name='logo-linkedin'
              onPress={() => Linking.openURL('http://google.com')}
              style={{
                fontSize: 'large',
                padding: '20px',
              }}
            />
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
})

export default Home
