import ImageGallery from 'react-image-gallery';

const images = [
  {
    original:
      'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwb01ce6fa/ProductImages/OAP7239/3600524074500/3600524074500_1.jpg?sw=270&sfrm=jpg&q=70'
  },
  {
    original:
      'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dw101b2c2b/ProductImages/OAP6813/3600523583270/3600523583270_2.jpg?sw=270&sfrm=jpg&q=70'
  },
  {
    original:
      'https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-lorealparis-fr-catalog/default/dwe2a1e329/ProductImages/OAP7177/3600524029531/3600524029531_1.jpg?sw=270&sfrm=jpg&q=70'
  }
];

const Gallery = () => {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
