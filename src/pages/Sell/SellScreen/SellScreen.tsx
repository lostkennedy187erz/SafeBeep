import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import SearchBar from '../../../components/SearchBar';
import CategoryCard from '../../../components/CategoryCard';
import Button from '../../../components/Button';
import {useTranslation} from 'react-i18next';
import OffOnline from '../../../components/OffOnLine/offonline'; // veya OffOnline bileşeninizin doğru yolunu buraya ekleyin

function SellScreen({navigation}: any) {
  const {t}: any = useTranslation();

  function goToProducts() {
    navigation.navigate('Products');
  }

  function goToFavorites() {
    navigation.navigate('FavPage');
  }

  return (
    <ScrollView style={styles.container}>
      <SearchBar placeholder={t('srch.code')} />

      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 1}}>
          <Button text={t('fav')} onPress={goToFavorites} />
        </View>
        <View style={{flex: 1}}>
          <Button text={t('prdct.all')} onPress={goToProducts} />
        </View>
      </View>

      <View style={{flexDirection: 'row', flex: 3}}>
        <CategoryCard
          Title={t('market')}
          onpress={null}
          imageUrl={require('../../../assets/images/market.png')}
        />
        <CategoryCard
          Title={t('electronic')}
          onpress={null}
          imageUrl={require('../../../assets/images/electronic.png')}
        />
      </View>

      <View style={{flexDirection: 'row', flex: 3}}>
        <CategoryCard
          Title={t('clothing')}
          onpress={null}
          imageUrl={require('../../../assets/images/clothes.png')}
        />
        <CategoryCard
          Title={t('accessories')}
          onpress={null}
          imageUrl={require('../../../assets/images/accessories.png')}
        />
      </View>

      <View style={{flexDirection: 'row', flex: 3}}>
        <CategoryCard
          Title={t('book.stationery')}
          onpress={null}
          imageUrl={require('../../../assets/images/books.png')}
        />
        <CategoryCard
          Title={t('cleaning')}
          onpress={null}
          imageUrl={require('../../../assets/images/cleaning.png')}
        />
      </View>
      <View style={styles.offOnlineContainer}>
        <OffOnline />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  offOnlineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 165,
  },
});

export default SellScreen;
