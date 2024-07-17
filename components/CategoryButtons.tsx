import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import destinationCategories from '@/data/categories';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/app/constants/Colors';

type Props = {
    onCategoryChanged: (category: string) => void;
}


const CategoryButtons = ({onCategoryChanged}: Props) => {
    const scrollRef = useRef<ScrollView>(null);
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelectCategory = (index: number) => {
        const selected = itemRef.current[index];
        setActiveIndex(index); 

        selected?.measure((x) => {
            scrollRef.current?.scrollTo({x: x, y: 0, animated: true })
        });

        onCategoryChanged(destinationCategories[index].title);
    }

  return (
    <View style={styles.title}>
      <ScrollView 
        ref={scrollRef}
        horizontal 
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContent}>
        {destinationCategories.map((item, index) => (
          <TouchableOpacity key={index} ref={(el) => itemRef.current[index] = el} onPress={() => handleSelectCategory(index)} style={activeIndex == index ? styles.categoryBtnActive :styles.categoryBtn}>
            <MaterialCommunityIcons name={item.iconName as any} size={18} color={activeIndex == index ? Colors.black : Colors.white} />
            <Text style={activeIndex == index ? styles.categoryBtnTxtActive : styles.categoryBtnTxt}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

const styles = StyleSheet.create({
  title: {
    marginLeft: 3
  },
  scrollViewContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3D3D3D',
    paddingHorizontal: 16,
    paddingVertical: 0,
    borderRadius: 100,
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtnTxt:{
    marginLeft: 5,
    color: Colors.white,
  },
  categoryBtnActive:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtnTxtActive:{
    marginLeft: 5,
    color: Colors.black,
  }
});
