import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import { Icon } from 'react-native-elements';
import OrderManagementScreen from '../screens/OrderManagementScreen';

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
        <clientTab.Screen 
            name='OrderManagementScreen'
            component={OrderManagementScreen}
            options={
                {
                    tabBarLabel: 'Vận đơn',
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