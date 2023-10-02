import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import { Icon } from 'react-native-elements';

const clientTab = createBottomTabNavigator();

const RootClientTabs = () => {
  return (
    <clientTab.Navigator
        // tabBarOptions = {{
        //     activeTintColor :colors.buttons
        // }}
    >
        <clientTab.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={
                {
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size})=>(
                        <Icon
                            name ='home'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    ),
                    headerShown: false
                }
            }
        />
    </clientTab.Navigator>
  )
}

export default RootClientTabs;

const styles = StyleSheet.create({})