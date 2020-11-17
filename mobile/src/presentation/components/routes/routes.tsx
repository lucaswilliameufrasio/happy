import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OrphanagesMap from '../../screens/orphanages-map/orphanages-map'

const AppStack = createStackNavigator()

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="OrphanagesMap"
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name="OrphanagesMap" component={OrphanagesMap} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
