const menu = [
  {
    id: 1,
    title: 'Bife de Chorizo',
    category: 'carnes',
    price: 15.99,
    img: 'https://i.pinimg.com/originals/cc/38/bb/cc38bb77185aab43827ef9d3c27e18b2.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'Asado',
    category: 'carnes',
    price: 13.99,
    img: 'https://www.hogarmania.com/comunidad/archivos/202009/cocina.carnes.asadoalaparrilla.374994.1599254143-848x477x70xX.jpg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'Vacío',
    category: 'carnes',
    price: 6.99,
    img: 'https://todosobreelasado.com/wp-content/uploads/2019/07/vacio-a-la-parrilla-1.jpg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'Costillitas de cerdo',
    category: 'carnes',
    price: 20.99,
    img: 'https://todosobreelasado.com/wp-content/uploads/2019/03/Solomillo-de-Cerdo.jpg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'Bondiola',
    category: 'carnes',
    price: 22.99,
    img: 'https://www.tiemposur.com.ar/uploads/noticia_galeria/2020/12/13/file_96548_main1',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'Provoleta',
    category: 'acompañamientos',
    price: 8.99,
    img: 'https://andigital.com.ar/images/queso_provoleta.jpg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'papas fritas',
    category: 'acompañamientos',
    price: 8.99,
    img: 'https://bfc.isdigitaltime.com/wp-content/uploads/2020/11/papas-fritas.jpg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'pure',
    category: 'acompañamientos',
    price: 3.99,
    img: 'https://www.hola.com/imagenes/cocina/recetas/20191009151176/pure-de-patata/0-730-547/pure-patatas-m.jpg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'ensalada lechuga y tomate',
    category: 'acompañamientos',
    price: 1.50,
    img: 'https://i2.wp.com/enrilemoine.com/wp-content/uploads/2013/08/Ensalada-siete-sabores-SAVOIR-FAIRE-by-enrilemoine-3.jpg?ssl=1',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'huevos fritos',
    category: 'acompañamientos',
    price: 1.99,
    img: 'https://placeralplato.com/files/2015/08/Huevo-frito-perfecto-640x480.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: 'buñuelos de acelga',
    category: 'acompañamientos',
    price: 3.60,
    img: 'https://cuk-it.com/wp-content/uploads/2020/05/thumb02-4-1024x576-1.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: 'chinchulines',
    category: 'achuras',
    price: 6.99,
    img: 'https://i.ytimg.com/vi/yccm0rMSgHo/maxresdefault.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: 'mollejas',
    category: 'achuras',
    price: 7.50,
    img: 'https://todosobreelasado.com/wp-content/uploads/2019/03/Mollejas-a-la-parrilla-500x375.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: 'riñones',
    category: 'achuras',
    price: 6.66,
    img: 'https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-receta-ri%C3%B1ones-parrilla-ri%C3%B1ones-receta-ri%C3%B1ones-ri%C3%B1ones-parrilla-parrilla-2.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: 'pollo',
    category: 'carnes',
    price: 10.25,
    img: 'https://todosobreelasado.com/wp-content/uploads/2020/05/Como-hacer-pollo-a-la-parrilla-500x375.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: 'choripan + huevo frito',
    category: 'carnes',
    price: 5.25,
    img: 'https://www.infobae.com/new-resizer/uARFj2_4F18wpN21WRIPf5vWlyE=/768x432/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/17105226/Chori-Veggie-Buenos-Aires-Verde-copia.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 17,
    title: 'chorizo/morcilla',
    category: 'carnes',
    price: 9.50,
    img: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/17105622/Rufino-2-copia.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 18,
    title: 'flan casero mixto',
    category: 'postres',
    price: 2.50,
    img: 'https://www.bacanal.com.ar/wp-content/uploads/2019/08/flan-casero-mixto.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 19,
    title: 'panqueque dulce de leche',
    category: 'postres',
    price: 3.50,
    img: 'https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/5GLEQUJ6URFTVOZ6FG5TORQPZQ.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 20,
    title: 'panqueque manzana al rhum',
    category: 'postres',
    price: 4.25,
    img: 'https://lasrecetasdelchef.net/wp-content/uploads/2016/11/Panqueque-de-manzanas-al-ron.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 21,
    title: 'almendrado con charlotte',
    category: 'postres',
    price: 2.25,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DBuGHeTyxqnqJsq87DvHFTIX0jq3H3PNP7yMdeExmouC9AyLkZc0Un1KGWaeCvKcAew&usqp=CAU',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 22,
    title: 'bochas de helado',
    category: 'postres',
    price: 2.25,
    img: 'https://images.clarin.com/2020/09/01/bochas-de-helado-de-dulce___UxLJKU7I5_720x0__1.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

export default menu;