import { useState } from 'react';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';
import ProductAccordions from './ProductAccordions';

const ProductDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState('red');
  const [selectedSize, setSelectedSize] = useState('XL');
  const [quantity, setQuantity] = useState(1);

  // Helper function to create image paths
  // Vite serves files from public folder
  const imgPath = (folder: string, filename: string) => {
    return `/images/${folder}/${filename}`;
  };

  const productData = {
    title: 'Vantage Active WeatherShield Jacket',
    subtitle: 'Premium thermal-lined commuter shell with Snappy x Vantage Circle design',
    points: 18900,
    deliveryInfo: 'Delivered in 5–7 business days',
    noReturns: true,
    images: [
      imgPath('Red', '  red-jacket-1.png'),
      imgPath('Red', '  red-jacket-2.png'),
      imgPath('Red', '  red-jacket-3.png'),
      imgPath('Red', '  red-jacket-4.png'),
    ],
    colors: [
      { 
        id: 'red', 
        label: 'Frost Red', 
        hex: '#C41E3A', 
        image: imgPath('Red', '  red-jacket-1.png'),
        gallery: [
          imgPath('Red', '  red-jacket-1.png'),
          imgPath('Red', '  red-jacket-2.png'),
          imgPath('Red', '  red-jacket-3.png'),
          imgPath('Red', '  red-jacket-4.png'),
        ]
      },
      { 
        id: 'blue', 
        label: 'Midnight Blue', 
        hex: '#0F1B5E', 
        image: imgPath('Blue', '  blue-jacket-1.png'),
        gallery: [
          imgPath('Blue', '  blue-jacket-1.png'),
          imgPath('Blue', '  blue-jacket-2.png'),
          imgPath('Blue', '  blue-jacket-3.png'),
          imgPath('Blue', '  blue-jacket-4.png'),
        ]
      },
      { 
        id: 'grey', 
        label: 'Urban Grey', 
        hex: '#6A6A6A', 
        image: imgPath('Grey', '  grey-jacket-1.png'),
        gallery: [
          imgPath('Grey', '  grey-jacket-1.png'),
          imgPath('Grey', '  grey-jacket-2.png'),
          imgPath('Grey', '  grey-jacket-3.png'),
          imgPath('Grey', '  grey-jacket-4.png'),
        ]
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    highlights: [
      '3M Thinsulate™ thermal core for extreme cold protection',
      'StormGuard zipper placket with reflective safety tape',
      'Snappy redemption eligible for instant checkout',
    ],
    description: `Fit Type: Regular jacket material is made of soft & fabric which has the role of blocking out the cold. It contains advantageous features such as a hood, zip closure, elastic cuffs & two side pockets.

Water resistant & breathable: The fabric is treated to repel water while maintaining breathability.`,
    specifications: [
      { label: 'Material', value: 'Polyester with water-resistant coating' },
      { label: 'Insulation', value: 'Synthetic down fill' },
      { label: 'Care', value: 'Machine washable' },
      { label: 'Weight', value: '650g' },
    ],
    sizeChart: `
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Chest (inches)</th>
            <th>Length (inches)</th>
            <th>Sleeve (inches)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S</td>
            <td>36-38</td>
            <td>26</td>
            <td>33</td>
          </tr>
          <tr>
            <td>M</td>
            <td>38-40</td>
            <td>27</td>
            <td>34</td>
          </tr>
          <tr>
            <td>L</td>
            <td>40-42</td>
            <td>28</td>
            <td>35</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>42-44</td>
            <td>29</td>
            <td>36</td>
          </tr>
          <tr>
            <td>XXL</td>
            <td>44-46</td>
            <td>30</td>
            <td>37</td>
          </tr>
        </tbody>
      </table>
    `,
    terms: [
      'No returns, refunds or cancellation will be allowed once the order has been placed.',
      'Products once redeemed cannot be reversed back.',
      'Vantage Circle will not be liable for any defects, warranties or service claims on any of the products.',
      'All the warranties and service requests wherever applicable will be provided by the respective brand or vendor.',
      'Orders will not be shipped on non business days (Sundays and any other non business day)',
      'Product color may vary due to photographic lighting sources and item will be shipped in the available assorted color',
    ],
  };

  const selectedColorData = productData.colors.find(c => c.id === selectedColor);
  const currentImages = selectedColorData?.gallery || productData.images;

  return (
    <div className="min-h-screen bg-vantage-bg-light">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Merchandise', href: '/merchandise' },
            { label: 'Organisation Store', href: '/merchandise/organisation' },
            { label: productData.title, href: '#' },
          ]}
        />

        <div className="mt-8 bg-white rounded-2xl shadow-vantage-soft">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 p-6 lg:p-8 lg:pb-12">
            <ProductImageGallery images={currentImages} />

            <ProductInfo
              title={productData.title}
              subtitle={productData.subtitle}
              points={productData.points}
              deliveryInfo={productData.deliveryInfo}
              noReturns={productData.noReturns}
              colors={productData.colors}
              sizes={productData.sizes}
              highlights={productData.highlights}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              quantity={quantity}
              onColorChange={setSelectedColor}
              onSizeChange={setSelectedSize}
              onQuantityChange={setQuantity}
            />
          </div>

          <ProductAccordions
            description={productData.description}
            sizeChart={productData.sizeChart}
            terms={productData.terms}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
