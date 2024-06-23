import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './AdminPanel.style';
import {useTranslation} from 'react-i18next';

const AdminPanel = () => {
  const {t}: any = useTranslation();

  const [users, setUsers] = useState<
    {
      id: string;
      usercode: string;
      password: string;
      checkoutNo: string;
    }[]
  >([]);

  const [usercode, setUserCode] = useState('');
  const [password, setPassword] = useState('');
  const [checkoutNo, setCheckoutNo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const storedUsers = await AsyncStorage.getItem('users');
        if (storedUsers) {
          setUsers(JSON.parse(storedUsers));
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        Alert.alert(t('error'), t('alert.retrievingUser'));
      }
    };

    if (modalVisible) {
      fetchUsers();
    }
  }, [modalVisible]);

  const handleSignUp = () => {
    if (
      usercode.trim() === '' ||
      password.trim() === '' ||
      checkoutNo.trim() === ''
    ) {
      Alert.alert(t('alert.warning'), t('alert.handleSignUp'));
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      usercode,
      password,
      checkoutNo,
    };

    setUsers([...users, newUser]);
    Alert.alert(t('alert.warning'), t('registration'));
  };

  const confirmData = async () => {
    try {
      await AsyncStorage.setItem('users', JSON.stringify(users));
      Alert.alert(t('alert.warning'), t('registration'));
    } catch (error) {
      console.error('Error saving users:', error);
      Alert.alert(t('alert.warning'), t('error.registration'));
    }
  };

  const handleSeeUsers = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      if (storedUsers) {
        setModalVisible(true);
        setUsers(JSON.parse(storedUsers));
      } else {
        Alert.alert(t('alert.warning'), t('alert.noUser'));
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      Alert.alert(t('error'), t('alert.retrievingUser'));
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      const filteredUsers = users.filter(u => u.id !== userId);
      await AsyncStorage.setItem('users', JSON.stringify(filteredUsers));
      setUsers(filteredUsers);
      Alert.alert(t('alert.warning'), t('user.deleted'));
    } catch (error) {
      console.error('Error removing user:', error);
      Alert.alert(t('error'), t('error.removeUser'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('managePnl')}</Text>
      <Input
        label={t('createUcode')}
        placeholder={t('usercode')}
        onChangeText={setUserCode}
        value={usercode}
        secureTextEntry={false}
      />
      <Input
        label={t('createPasswd')}
        placeholder={t('password')}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={false}
      />
      <Input
        label={t('createCheckNo')}
        placeholder={t('checkout')}
        onChangeText={setCheckoutNo}
        value={checkoutNo}
        secureTextEntry={false}
      />
      <Button text={t('save')} onPress={handleSignUp} />
      <Button text={t('confirm')} onPress={confirmData} />
      <Button text={t('seeUser')} onPress={handleSeeUsers} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{t('users')}</Text>
              <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.userItem}
                    onPress={() => handleDeleteUser(item.id)}>
                    <Text>
                      {t('usercode')}: {item.usercode}
                    </Text>
                    <Text>
                      {t('password')}: {item.password}
                    </Text>
                    <Text>
                      {t('checkout')}: {item.checkoutNo}
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <Button
                text={t('close')}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AdminPanel;
