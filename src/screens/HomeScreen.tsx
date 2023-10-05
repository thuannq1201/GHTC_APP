import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HomeHeader from '../components/Header';
import banner from '../assets/images/banner1.png';
import Swiper from 'react-native-swiper';
import {Button, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}>
        <Text>Xin chào quý khách!</Text>
        <Button
          title="Đăng nhập"
          titleStyle={{fontWeight: 'bold'}}
          buttonStyle={{}}
        />
      </View>
      <View style={{height: 200, marginBottom: 8}}>
        <Swiper autoplay={true} pagingEnabled={true}>
          <View style={styles.slider1}>
            <Image
              source={banner}
              style={{
                height: 200,
                width: '100%',
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.slider2}>
            <Image
              source={banner}
              style={{
                height: 200,
                width: '100%',
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.slider3}>
            <Image
              source={banner}
              style={{
                height: 200,
                width: '100%',
                borderRadius: 10,
              }}
            />
          </View>
        </Swiper>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <TouchableOpacity 
          style={styles.buttonServices}
          onPress={()=>navigation.navigate('CreateOrderScreen')}
        >
          <Text style={{color: '#fff', fontSize: 20}}>Tạo đơn</Text>
          <Text style={{color: '#fff', textAlign: 'center'}}>Nhanh chóng và thuận tiện</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonServices}
          onPress={()=>navigation.navigate('OrderManagementScreen')}

        >
          <Text style={{color: '#fff', fontSize: 20}}>Quản lí</Text>
          <Text style={{color: '#fff'}}>Đơn hàng và dòng tiền</Text>
        </TouchableOpacity>
      </View>
      {/* dịch vụ */}
      <View>
        <Text style={styles.h1}>Dịch vụ</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <TouchableOpacity   
          style={styles.buttonServices}
        >
          <Text style={{color: '#fff', fontSize: 20}}>Tra cứu</Text>
          <Text style={{color: '#fff', textAlign: 'center'}}>Nhanh chóng và thuận tiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonServices}>
          <Text style={{color: '#fff', fontSize: 20}}>Quản lí</Text>
          <Text style={{color: '#fff'}}>Đơn hàng và dòng tiền</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <TouchableOpacity style={styles.buttonServices}>
          <Text style={{color: '#fff', fontSize: 20}}>Tra cứu</Text>
          <Text style={{color: '#fff', textAlign: 'center'}}>Nhanh chóng và thuận tiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonServices}>
          <Text style={{color: '#fff', fontSize: 20}}>Quản lí</Text>
          <Text style={{color: '#fff'}}>Đơn hàng và dòng tiền</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 20,
        }}
      />

      {/* tin tức  */}
      <View>
        <Text style={styles.h1}>TIN TỨC GHTC</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <TouchableOpacity style={styles.buttonServices}>
          <Text style={{color: '#fff', fontSize: 20}}>Tra cứu</Text>
          <Text style={{color: '#fff', textAlign: 'center'}}>Nhanh chóng và thuận tiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonServices}>
          <Text style={{color: '#fff', fontSize: 20}}>Quản lí</Text>
          <Text style={{color: '#fff'}}>Đơn hàng và dòng tiền</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <TouchableOpacity style={styles.buttonServices}>
          <Text style={{color: '#fff', fontSize: 20}}>Tra cứu</Text>
          <Text style={{color: '#fff', textAlign: 'center'}}>Nhanh chóng và thuận tiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonServices}>
          <Text style={{color: '#fff', fontSize: 20}}>Quản lí</Text>
          <Text style={{color: '#fff'}}>Đơn hàng và dòng tiền</Text>
        </TouchableOpacity>
      </View>

      {/*  */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  slider1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  slider2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  slider3: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonServices: {
    backgroundColor: '#046ec5',
    paddingVertical: 30,
    borderRadius: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
    color: '#fff',
    width: '45%'
  },
  h1: {
    textTransform: 'uppercase',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 30,
    fontWeight: '600',
  },
  hr:{
    
  }
});
