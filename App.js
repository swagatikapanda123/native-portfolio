import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'
import Portfolio from './screen/Portfolio.js'
import About from './screen/About.js'
import Home from './screen/Home.js'

//const Stack = createStackNavigator()

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{ headerShown: false }}
    //     initialRouteName={'Home'}
    //   >
    //     <Stack.Screen name='Home' component={Tabs} />
    //     <Stack.Screen name='Portfolio' component={Portfolio} />
    //     <Stack.Screen name='About' component={About} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Home />
  )
}

export default App
