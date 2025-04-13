import {
  View,
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
} from "react-native";

import PageTitle from "../../components/PageTitle";
import GenericContainer from "../../components/GenericContainer";

import GalleryImagesList from "../../assets/images/galleryImages/GalleryImagesList";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { TabsStrings } from "../../assets/strings/Strings";
import styles from "./Styles";

type GalleryImageItem = {
  id: string;
  source: ImageSourcePropType;
};

const Gallery = () => {
  return (
    <SafeAreaView style={GlobalStyles.greyBackground}>
      <PageTitle titleTxt={TabsStrings.gallery} />
      <GenericContainer style={styles.containerStyle}>
        <FlatList<GalleryImageItem>
          data={GalleryImagesList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
          bounces={false}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                source={item.source}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
          )}
        />
      </GenericContainer>
    </SafeAreaView>
  );
};

export default Gallery;
