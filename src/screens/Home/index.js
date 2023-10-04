import styles from './styles';
import Title from '../../components/Title';
import React, {useEffect, useState} from 'react';
import jsondata from '../../data/attractions.json';
import categories from '../../data/categories.json';
import Categories from '../../components/Categories';
import {useNavigation} from '@react-navigation/native';
import {FlatList, SafeAreaView, Text} from 'react-native';
import AttractionCard from '../../components/AttractionCard';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(All);
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    setData(jsondata);
  }, []);

  const All = 'All';

  useEffect(() => {
    if (selectedCategory === All) {
      setData(jsondata);
    } else {
      const filterData = jsondata?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );
      setData(filterData);
    }
  }, [selectedCategory]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          numColumns={2}
          ListEmptyComponent={<Text>No Item Found</Text>}
          style={{flexGrow: 1}}
          ListHeaderComponent={
            <>
              <Title text="Where do" style={{fontWeight: 'normal'}} />
              <Title text="you want to go" />
              <Title text="Explore Attractions" style={styles.subtitle} />
              <Categories
                selectedCategory={selectedCategory}
                onCategoryPress={setSelectedCategory}
                categories={[All, ...categories]}
              />
            </>
          }
          keyExtractor={item => String(item?.id)}
          renderItem={({item, index}) => (
            <AttractionCard
              onPress={() => navigation.navigate('AttractionDetails', {item})}
              key={item.id}
              style={index % 2 === 0 ? {marginRight: 12} : {}}
              subtitle={item.city}
              title={item.name}
              imageSrc={item.images?.length ? item.images[0] : null}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default React.memo(Home);
