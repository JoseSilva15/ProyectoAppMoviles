import React from 'react';
import {View, Image, ScrollView, Dimensions, StyleSheet, Text} from 'react-native';
//Carrusel de imagenes, aparece en la página de inicio al principio 
const {width} = Dimensions.get("window");
const height= width * 0.6; //60%
const images = [
  'https://carlosvassan.com/wp-content/uploads/2021/08/Mejores-gama-alta-2021.jpg',
  'https://www.enter.co/wp-content/uploads/2020/10/collage-6.jpg',
  'https://i.ytimg.com/vi/j8FGYRieIjs/maxresdefault.jpg',
  'https://i.ytimg.com/vi/6EdTRE81FoY/maxresdefault.jpg',

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

