import React from 'react';
import {View, Image, ScrollView, Dimensions, StyleSheet, Text} from 'react-native';
//Carrusel de imagenes numero 2 aparece al final en la pantalla de inicio
const {width} = Dimensions.get("window");
const height= width * 0.6; //60%
const images = [
    'https://pro2-bar-s3-cdn-cf.myportfolio.com/f08a6fa14de9d8cdb40eecf2394b2933/1bfe18a60fc3fea927fbbdf6_rw_1200.png?h=7d2ea322062327b7d96bdb7ea3145c65',
  'https://cdn.forbes.com.mx/2021/03/samsung_galaxya52.jpg',
  'https://assets.iproup.com/cdn-cgi/image/w=880,f=webp/https://assets.iproup.com/assets/jpg/2021/03/17138.jpg',
  'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/10/opinion-analisis-iphone-12-pro-2114175.jpg?itok=t5pPtOd6',
  'https://s2.glbimg.com/Z29g3elO6AItGA8A2r94f2e69YM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/A/J/rODpN9T9WHyKQh5kLOGQ/moto-g7-11.jpg',
  'https://i.ytimg.com/vi/k9ypS2oE_6c/maxresdefault.jpg'
]  

export default class Slider extends React.Component{
  state = {
    active: 0
  }
change = ({nativeEvent}) => {
  
  const slide = Math.ceil (nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
  if(slide !== this.state.active){
    this.setState({active: slide});
  }
}

  render(){
    return(
      <View style={style.container}>
        <ScrollView 
        pagingEnabled 
        horizontal 
        onScroll={this.change}
        showsHorizontalScrollIndicator={false}
        style={style.scroll}>
          {
            images.map((image, index) => (
              <Image
                Key={index}
                source={{ uri: image}}
                style={style.image}
              />
            ))
          }
        </ScrollView>
        <View style={style.pagination}>
          {
            images.map((i,k) => (
              <Text key={k} style={k==this.state.active ? style.pagingActivetext : style.pagingtext}>⬤</Text>

            ))
          }
         
        </View>

      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {marginTop: 50, width, height },
  scroll: {width, height}, 
  image: { width, height, resizeMode: 'cover'}, 
  pagination: {flexDirection:'row', position:'absolute', bottom:0, alignSelf:'center'},
  pagingtext: {color:'#888', margin: 3},
  pagingActivetext: {color:'#888', margin: 3},

  
})