import React from 'react';
import {View, Image, ScrollView, Dimensions, StyleSheet, Text} from 'react-native';
//Carrusel de imagenes, aparece en la página de inicio al principio 
const {width} = Dimensions.get("window");
const height= width * 0.6; //60%
const images = [
  'https://www.radioeme.com/wp-content/uploads/2020/07/nueva-portada-enero-5.jpg',
  'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2019/09/iphone-11-alex-cranz.jpg',
  'https://i.blogs.es/388790/ofi-03/840_560.jpg',
  'https://telcelcondesa.com.mx/2167-medium_default/motorola-moto-one-dual-sim-32gb.jpg',
  'https://i1.wp.com/www.4tomono.com/wp-content/uploads/2019/12/mejores-celulares-2018.jpg?resize=1110%2C600&ssl=1'
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


