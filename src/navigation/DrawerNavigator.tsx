import React from 'react'
import { Icon } from 'react-native-elements';
import DrawerContent from '../components/DrawerContent';
import RootClientTabs from './ClientTab';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props}/>}
    >
        <Drawer.Screen
            name='RootClientTabs'
            component={RootClientTabs}
            options={{
                title:'client',
                drawerIcon: ({focused, size}) => (
                    <Icon
                        type='material-community'
                        name='home'
                        color={focused ? '#7cc' : '#ccc'}
                        size={size}
                    />
                ),
                headerShown: false
            }}
        />
        
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

