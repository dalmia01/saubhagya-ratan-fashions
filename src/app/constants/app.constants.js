export const JEWELLERY_LINK = "/jewellery"

export const COLLECTION_CATEGORIES = [
   {
    name: "Rings",
    description: "Find rings that make a statement and capture elegance.",
    image: "https://shopdumroo.com/cdn/shop/files/2.png",
    href: `${JEWELLERY_LINK}/rings`,
  },
  {
    name: "Jhumka",
    description:
      "Explore our exquisite collection of jhumka handcrafted with care.",
    image: "https://shopdumroo.com/cdn/shop/files/2.png",
    href: `${JEWELLERY_LINK}/jhumka`,
  },
  {
    name: "Earrings",
    description: "Discover elegant earrings perfect for every occasion.",
    image: "https://shopdumroo.com/cdn/shop/files/2.png",
    href: `${JEWELLERY_LINK}/earrings`,
  },
  {
    name: "Necklaces",
    description: "Shop stunning necklaces that elevate any outfit.",
    image: "https://shopdumroo.com/cdn/shop/files/2.png",
    href: `${JEWELLERY_LINK}/necklaces`,
  },
 
]

export const ACCESSORIES = [
   {
    name: "Accessories",
    description: "Find accessories that make a statement and capture elegance.",
    image: "https://shopdumroo.com/cdn/shop/files/2.png",
    href: `${JEWELLERY_LINK}/accessories`,
  },
 
]

export const MENU_LINKS = [
  { name: "Home", href: "/" },
  { name: "Jewellery", href: JEWELLERY_LINK },
  { name: "Accessories", href: `${JEWELLERY_LINK}/accessories` },
  { name: "Contact Us", href: "/contact" },
];

export const FOOTER_MENU_LINKS = [
  { name: "Home", href: "/" },
  { name: "Jewellery", href: JEWELLERY_LINK },
  { name: "Accessories", href: `${JEWELLERY_LINK}/accessories` },
];

export const QUICK_LINKS = [
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Shipping", href: "/shipping" },
  { name: "Refund & Returns", href: "/refund-returns" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export const FAQS = [
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy on all items. Items must be in their original condition and packaging. Contact our support to initiate a return.",
  },
  {
    title: "Do you ship internationally?",
    content:
      "Yes! We ship worldwide. Shipping charges and delivery times vary depending on the destination.",
  },
  {
    title: "How long does delivery take?",
    content:
      "Domestic deliveries usually take 3-5 business days. International deliveries can take 7-21 business days depending on your location.",
  },
  {
    title: "Can I track my order?",
    content:
      "Absolutely! Once your order is shipped, you’ll receive a tracking number via email.",
  },
];

export const SAMPLE_PRODUCTS = [
  {
    _id: 1,
    name: "Gold Necklace",
    price: 149.99,
    image: "https://shopdumroo.com/cdn/shop/files/prabha_latkan_1.webp?v=1722605369&width=720",
    images: [
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_1.webp?v=1722605369&width=720",
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_2.webp?v=1722605369&width=720",
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_3.webp?v=1722605369&width=720",
    ],
    description:
      "Elegant gold bracelet handcrafted with the finest materials. Perfect for gifting or daily wear.",
  },
  {
    _id: 2,
    name: "Silver Ring",
    price: 89.99,
    image: "https://shopdumroo.com/cdn/shop/files/prabha_latkan_1.webp?v=1722605369&width=720",
    images: [
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_1.webp?v=1722605369&width=720",
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_2.webp?v=1722605369&width=720",
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_3.webp?v=1722605369&width=720",
    ],
    description:
      "Elegant gold bracelet handcrafted with the finest materials. Perfect for gifting or daily wear.",
  },
  {
    _id: 3,
    name: "Diamond Earrings",
    price: 249.99,
    image: "https://shopdumroo.com/cdn/shop/files/prabha_latkan_1.webp?v=1722605369&width=720",
    images: [
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_1.webp?v=1722605369&width=720",
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_2.webp?v=1722605369&width=720",
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_3.webp?v=1722605369&width=720",
    ],
    description:
      "Elegant gold bracelet handcrafted with the finest materials. Perfect for gifting or daily wear.",
  },
  {
    _id: 4,
    name: "Leather Bracelet",
    price: 49.99,
    image: "https://shopdumroo.com/cdn/shop/files/prabha_latkan_1.webp?v=1722605369&width=720",
    images: [
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_1.webp?v=1722605369&width=720",
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_2.webp?v=1722605369&width=720",
      "https://shopdumroo.com/cdn/shop/files/prabha_latkan_3.webp?v=1722605369&width=720",
    ],
    description:
      "Elegant gold bracelet handcrafted with the finest materials. Perfect for gifting or daily wear.",
  },
];

export const SHIPPING_INFO = [
    {
      title: "Domestic Shipping",
      description:
        "We offer fast and reliable shipping across India. Orders are processed within 1-2 business days. Delivery typically takes 3-7 business days depending on your location.",
    },
    {
      title: "Shipping Charges",
      description:
        "Shipping charges are calculated at checkout based on your order size and destination. Free shipping is available on orders above ₹3,000.",
    },
    {
      title: "Order Tracking",
      description:
        "Once your order is shipped, you will receive a tracking number via email to track your order in real-time.",
    },
    {
      title: "Packaging",
      description:
        "All orders are carefully packaged to ensure they arrive safely. Eco-friendly and premium packaging is available for gift orders.",
    },
  ];

  export const PRIVACY_POLICIES = [
    {
      title: "Introduction",
      content: `Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or make a purchase. By using our site, you agree to the terms of this Privacy Policy.`,
    },
    {
      title: "Information We Collect",
      content: `We may collect personal information such as your name, email address, phone number, shipping and billing address, and payment details when you place an order. We may also collect non-personal information like browser type, IP address, and browsing behavior to improve our website experience.`,
    },
    {
      title: "How We Use Your Information",
      content: `We use your personal information to process your orders, communicate order updates, provide customer support, and improve our services. We do not sell or share your personal information with third parties for marketing purposes without your consent.`,
    },
    {
      title: "Cookies & Tracking",
      content: `We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized recommendations. You can manage your cookie preferences in your browser settings.`,
    },
    {
      title: "Data Security",
      content: `We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.`,
    },
    {
      title: "Third-Party Services",
      content: `Our website may use third-party services for analytics, payment processing, and shipping. These third-party providers have their own privacy policies, and we encourage you to review them.`,
    },
    {
      title: "Your Rights",
      content: `You have the right to access, correct, or delete your personal information. You may also unsubscribe from marketing communications at any time.`,
    },
    {
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions or concerns regarding this Privacy Policy, please contact us at support@yourshop.com.`,
    },
  ];

  // src/data/refundReturns.js
export const REFUND_RETURNS_POLICIES = [
  {
    title: "Return Policy",
    content:
      "We want you to be completely satisfied with your purchase. If you are not satisfied, you may return the item(s) within 14 days of delivery for a full refund or exchange. The items must be unused, in their original packaging, and in the same condition as received.",
  },
  {
    title: "Refunds",
    content:
      "Once we receive your returned items, our team will inspect them. Refunds will be processed to your original payment method within 5-7 business days. Please note that shipping charges are non-refundable.",
  },
  {
    title: "Exchanges",
    content:
      "If you wish to exchange a product for a different size, color, or style, please contact our support team. We will guide you through the exchange process and ensure the correct item is sent.",
  },
  {
    title: "Defective or Damaged Items",
    content:
      "If you receive a defective or damaged product, please contact us within 48 hours of receiving the order. We will provide a full refund or send a replacement item at no additional cost.",
  },
  {
    title: "Process to Initiate a Return",
    content:
      "1. Contact our customer support at support@yourshop.com with your order details.\n2. Package the item securely.\n3. Ship the item back to our address (provided by support).\n4. Once we receive and inspect the item, your refund/exchange will be processed.",
  },
  {
    title: "Important Notes",
    content:
      "- Sale or discounted items may be subject to specific return policies.\n- Customized or personalized products are non-returnable unless defective.\n- Keep your shipping receipt until the return/exchange is complete.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions regarding returns or refunds, please contact us at support@yourshop.com or call +91 98765 43210.",
  },
];


export const DUMMY_PRODUCTS = [
  {
    _id: "1",
    name: "Gold Bracelet",
    price: 2999,
    images: [
      "https://shopdumroo.com/cdn/shop/files/product1.jpg",
      "https://shopdumroo.com/cdn/shop/files/product1-2.jpg",
      "https://shopdumroo.com/cdn/shop/files/product1-3.jpg",
    ],
    description:
      "Elegant gold bracelet handcrafted with the finest materials. Perfect for gifting or daily wear.",
  },
  {
    _id: "2",
    name: "Silver Earrings",
    price: 1999,
    images: [
      "https://shopdumroo.com/cdn/shop/files/product2.jpg",
      "https://shopdumroo.com/cdn/shop/files/product2-2.jpg",
    ],
    description:
      "Beautiful silver earrings designed to complement any outfit. Lightweight and stylish.",
  },
];

export const EMAIL_ID = "saubhagyaratanfashions@gmail.com";
export const PHONE_NO = "+91 7065572044";
export const ADDRESS = "Tilak Nagar, Delhi";


