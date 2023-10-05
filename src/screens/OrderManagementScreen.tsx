import {StyleSheet, Text, View, Alert, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Card, Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const OrderManagementScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.fixToText}>
          <View style={styles.Button}>
            <Button
              title="Hàng gửi"
              onPress={() => Alert.alert('Left button pressed')}
            />
          </View>
          <View style={styles.Button}>
            <Button
              title="Hàng nhận"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>
        </View>

        {/* <Card.Divider /> */}
        {/* <View style={{position: 'relative', alignItems: 'center'}}>
        <Image
          style={{width: '100%', height: 100}}
          resizeMode="contain"
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4',
          }}
        />
        <Text>Pranshu Chittora</Text>
      </View> */}

        <Card>
          <View style={styles.heading}>
            <Card.Title>GHTC0987654321</Card.Title>
            <Text style={styles.status}>Chờ lấy hàng</Text>
          </View>

          <Card.Divider />
          <Card.Image
            style={{padding: 0}}
            source={{
              uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon name="code" color="#ffffff" iconStyle={{marginRight: 10}} />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>

        <Card>
          <Card.Title>GHTC0987654321</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{padding: 0}}
            source={{
              uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon name="code" color="#ffffff" iconStyle={{marginRight: 10}} />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>

        <Card>
          <Card.Title>GHTC0987654321</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{padding: 0}}
            source={{
              uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon name="code" color="#ffffff" iconStyle={{marginRight: 10}} />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'left',
    flex: 1,
  },
  fixToText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  Button: {
    flex: 1,
    marginHorizontal: 7,
  },
  status: {
    // flex: 1,
    padding: 2,
    backgroundColor: '#32cd32',
    fontSize: 10,
    color: '#fff',
    borderRadius: 50,
    // width: "100%"
    marginLeft: 10,
  },
  heading: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default OrderManagementScreen;
