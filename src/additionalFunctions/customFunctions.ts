interface APICard {
    id: string;
    products: {
      id: string;
      name: {
        default: string;
      };
      validity_in_days: number;
      price: number;
    }[];
  }
  
  interface TransformedCard {
    id: string;
    numberOfDays: number;
    priceAdult: number;
    priceStudCh: number;
  }
  
  export const transformCardsData = (jsonData: { cards: APICard[] }): TransformedCard[] => {
    if (!jsonData?.cards || !Array.isArray(jsonData.cards)) {
      console.error('Invalid data format: missing cards array');
      return [];
    }
  
    return jsonData.cards.map((card) => {
      const adultProduct = card.products.find(product => 
        product.name.default.toLowerCase().includes('adult')
      );
      
      const childStudentProduct = card.products.find(product => 
        product.name.default.toLowerCase().includes('child') || 
        product.name.default.toLowerCase().includes('student')
      );
  
      return {
        id: card.id,
        numberOfDays: card.products[0]?.validity_in_days || 1,
        priceAdult: adultProduct?.price || 0,
        priceStudCh: childStudentProduct?.price || 0
      };
    });
  };