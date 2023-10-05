import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, Icon, Switch} from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

const DrawerContent = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: '#046ec5', marginBottom: 8}}>
          <View
            style={{
              flexDirection: 'column',
              paddingLeft: 20,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
              }}
            />

            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: 18,
                }}>
                Vũ Đức Tùng
              </Text>
              <Text style={{fontSize: 14, marginVertical: 4, color: '#fff'}}>
                0866861678
              </Text>
              <Text style={{fontSize: 14, color: '#fff'}}>
                vuductung07022001@gmail.com
              </Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
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
        label="Đăng xuất"
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
            onPress={() => navigation.navigate('Welcome')}
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
  avatar:{
    
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
