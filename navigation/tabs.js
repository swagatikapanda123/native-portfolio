import React, { Children } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS, icons } from '../constants'
import Home from '../screen/Home.js'
import { LinearGradient } from 'expo-linear-gradient'

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
        }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigation
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name='About'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                About
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Portfolio'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                PORTFOLIO
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigation>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})

export default Tabs
