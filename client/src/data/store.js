
import hero from '.././assets/hero.png'
import Img1 from '.././assets/ProductImg1.png'
import Img2 from '.././assets/ProductImg2.png'
import Img3 from '.././assets/ProductImg3.png'
import Img4 from '.././assets/ProductImg4.png'
import Img5 from '.././assets/ProductImg5.png'
import Img6 from '.././assets/ProductImg6.png'
import Img7 from '.././assets/ProductImg7.png'
import Img8 from '.././assets/ProductImg8.png'

const store = {
  items:[
      {
      id: 1,
      title: 'Brown Brim',
      imageUrl: [
        Img1,
        Img2,
        'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
      ],

      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 22,
      type: 'Hats',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: true,
      hot: false,
      addCart:false,
    },
    
      {
      id: 2,
      title: 'Grey Brim',
      imageUrl: [
        'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        Img1,
        'https://i.ibb.co/rKBDvJX/palm-tree-cap.png'
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 25,
      type: 'Hats',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: true,

addCart:false,    },
  

    {
      id: 3,
      title: 'Red Beanie',
      imageUrl: [
        Img3,
        Img2,
        'https://i.ibb.co/X2VJP2W/blue-snapback.png'
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 18,
      type: 'Hats',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },
  

    {
      id: 4,
      title: 'Adidas NMD',
      imageUrl: [
        'https://i.ibb.co/bPmVXyP/black-converse.png',
        Img3,
        'https://i.ibb.co/bPmVXyP/black-converse.png'
    ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 220,
      type: 'Sneakers',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Adidas',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: true,
      hot: false,
      addCart:false,
    },
  

    {
      id: 5,
      title: 'Nike White AirForce',
      imageUrl:[    
        'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        'https://i.ibb.co/QcvzydB/nikes-red.png',
        'https://i.ibb.co/fMTV342/nike-brown.png'
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 160,
      type: 'Sneakers',
      gender: 'Women',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Nike',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },
    
     {
      id: 6,
      title: 'Air Jordan Limited',
      imageUrl: [
        'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        'https://i.ibb.co/Mhh6wBg/timberlands.png',
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 190,
      type: 'Sneakers',
      gender: 'Children',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Nike',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },
  
    {
      id: 7,
      title: 'Black Jean Shearling',
      imageUrl: [    
        "https://i.ibb.co/XzcwL5s/black-shearling.png",
        "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        "https://i.ibb.co/N71k1ML/grey-jean-jacket.png"
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 125,
      type: 'Jackets',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Adidas',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: true,
      hot: false,
      addCart:false,
    },
  

    {
      id: 8,
      title: 'Brown Shearling',
      imageUrl: [
         "https://i.ibb.co/s96FpdP/brown-shearling.png",
      "https://i.ibb.co/M6hHc3F/brown-trench.png"
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 165,
      type: 'Jackets',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: true,

addCart:false,    },
  
    {
      id: 9,
      title: 'Blue Tanktop',
      imageUrl: [
        "https://i.ibb.co/7CQVJNm/blue-tank.png",
        "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        "https://i.ibb.co/KV18Ysr/floral-skirt.png"
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 25,
      type: 'Dress',
      gender: 'Women',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Adidas',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },
  

    {
      id: 10,
      title: 'Red Dots Dress',
      imageUrl: [
        "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        "https://i.ibb.co/KmSkMbH/striped-sweater.png"
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 80,
      type: 'Dress',
      gender: 'Women',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: true,
      hot: false,
      addCart:false,
    },
  
   {
    id: 11,
      title: 'Yellow Track Suit',
      imageUrl: [
        "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        "https://i.ibb.co/qBcrsJg/white-vest.png"
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 135,
      type: 'Dress',
      gender: 'Women',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },
  
    {
    id: 12,
      title: 'Camo Down Vest',
      imageUrl: ['http://i.ibb.co/xJS0T3Y/camo-vest.png'],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesting industry',
      price: 325,
      gender: 'Men',
      type: 'Vest',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: true,

addCart:false,    },
  
 
    {
      id: 13,
    title: 'Floral T-shirt',
   imageUrl: [
      "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
      "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png"
   ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 20,
      gender: 'Men',
      type: 'T-Shirt',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },
  

    {
      id: 14,
      title: 'Black & White Longsleeve',
      imageUrl: [
        "https://i.ibb.co/55z32tw/long-sleeve.png",
        "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"
  ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 25,
      gender: 'Men',
      type: 'Sleeve',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },

    {
      id: 19,
      title: 'Brown Brim',
      imageUrl: [
        Img1,
        Img2,
        'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
      ],

      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 22,
      type: 'Hats',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: true,
      hot: false,
      addCart:false,
    },
    
      {
      id: 20,
      title: 'Grey Brim',
      imageUrl: [
        'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        Img1,
        'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 25,
      type: 'Hats',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: true,

addCart:false,    },
  

    {
      id: 21,
      title: 'Red Beanie',
      imageUrl: [
        Img3,
        Img2,
        'https://i.ibb.co/X2VJP2W/blue-snapback.png',
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 18,
      type: 'Hats',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },
  

    {
      id: 22,
      title: 'Adidas NMD',
      imageUrl: [
        'https://i.ibb.co/bPmVXyP/black-converse.png',
        Img3,
        'https://i.ibb.co/bPmVXyP/black-converse.png',
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 220,
      type: 'Sneakers',
      gender: 'Men',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Adidas',
      color: [
         'red',
         'blue',
         'black',
         'green'
      ],
      like: false,
      featured: true,
      hot: false,
      addCart:false,
    },


  ],

  kit:[
    {
      id: 15,
      title: 'FULL WINTER KIT',
      HeroImage: hero,
      imageUrl:[
        'https://i.ibb.co/55z32tw/long-sleeimg1:ve.png',
        'https://i.ibb.co/VpW4x5t/roll-up-jimg2:ean-shirt.png'
  ],
      items:'Half Jacket + Skiny Trousers + Boot leather',
      description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry ',
      price: 120,
      gender: 'Women',
      type: 'kit',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      color: [
        'red',
        'blue',
        'black',
        'green'
     ],
      brand: 'Reebook',
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },

    {
      id: 16,
      title: 'FULL SPRING KIT',
      HeroImage: hero,
      imageUrl:[
        'https://i.ibb.co/55z32tw/long-sleeimg1:ve.png',
        'https://i.ibb.co/VpW4x5t/roll-up-jimg2:ean-shirt.png'
      ],
      items:'Half Jacket + Skiny Trousers + Boot leather',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry ',
      price: 150,
      color: [
        'red',
        'blue',
        'black',
        'green'
     ],
      gender: 'Men',
      type: 'kit',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      brand: 'Reebook',
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },

    {
      id: 17,
      title: 'FULL AUTUMN KIT',
      HeroImage: hero,
      imageUrl:[
        'https://i.ibb.co/55z32tw/long-sleeimg1:ve.png',
        'https://i.ibb.co/VpW4x5t/roll-up-jimg2:ean-shirt.png'
  ],
      items:'Half Jacket + Skiny Trousers + Boot leather',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry ',
      price: 180,
      gender: 'Men',
      type: 'kit',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      color: [
        'red',
        'blue',
        'black',
        'green'
     ],
      brand: 'Reebook',
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },

    {
      id: 18,
      title: 'FULL SUMMER KIT',
      HeroImage: hero,
      imageUrl:[
        'https://i.ibb.co/55z32tw/long-sleeimg1:ve.png',
        'https://i.ibb.co/VpW4x5t/roll-up-jimg2:ean-shirt.png'
      ],
      items:'Half Jacket + Skiny Trousers + Boot leather',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry ',
      price: 220,
      gender: 'Men',
      type: 'kit',
      size: ['S', 'M', 'L', 'XL'],
      quantity: 1,
      color: [
        'red',
        'blue',
        'black',
        'green'
     ],
      brand: 'Reebook',
      like: false,
      featured: false,
      hot: false,
      addCart:false,
    },
    
  ]
}
export default store;
