import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, Switch} from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <Text>abc</Text>    
        </View>
        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />      
        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />
        <View style={{borderTopWidth: 1, borderTopColor: '#ededed'}}>
          <Text style={styles.preferences}>Preferences</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
            // onPress ={()=>{signOut()}}
          />
        )}
      />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  preferences: {
    fontSize: 16,
    color: '#ccc',
    paddingTop: 10,
    paddingLeft: 20,
  },

  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: '#ccc',
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
