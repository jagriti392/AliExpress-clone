import React from 'react';
import { ChakraProvider, Box, Image, Heading, Text, VStack, HStack, Center, Flex } from '@chakra-ui/react';

function HomeGarden () {
  return (
   
    <ChakraProvider>
      <Box p={4}>
        {/* Top Heading */}
        <Heading as="h1" mb={4}>Gardening & Home Appliances Product</Heading>

        {/* First Row of Images */}
        <HStack spacing={4} mb={4}>
          {[
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHo4l4tpzAEf2a_pupdyGy53LGzoRqph5DQ&s', caption: 'Tools'},
            { src:'https://www.naturehills.com/pub/media/wysiwyg/category_pages/home_and_garden/fertilizer_and_weed_category_image.jpg', caption: 'Naturals Hills' },
            { src:'https://www.onestopgrowshop.co.uk/cdn/shop/files/group_image_3_24.jpg?v=1701863847',caption:'Coco'},
            {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlXktjcX6ghCMXubIZQhvyyqZ6kZspn3hSQ&s', caption: 'Bajaj Appliances' },
            { src:'https://indiacircus.com/pub/media/wysiwyg/collection/images/Cushion-Covers-26.04.2022.jpg', caption: 'Home decor cusion covers' },
            { src: 'https://m.media-amazon.com/images/I/61BoZu-YHiL._AC_UF894,1000_QL80_.jpg', caption: 'Wall Stickers' },
          ].map((item, index) => (
            <VStack key={index}>
              <Image
                src={item.src}
                alt={`Image ${index + 1}`}
                borderRadius="full"
                boxSize="190px"
                objectFit="cover"
              />
              <Text>{item.caption}</Text>
            </VStack>
          ))}
        </HStack>

        {/* Second Row of Images */}
        <HStack spacing={4} mb={4}>
          {[
            { src: 'https://www.venushomeappliances.com/storage/app/applicationFiles/20211120055851home-iron-ourproducts.png', caption: 'Venus Appliances' },
            { src:'https://m.media-amazon.com/images/I/71t3wgUGQPL._AC_UF894,1000_QL80_.jpg', caption: 'Home Decor' },
            { src: 'https://images.prismic.io/rushordertees-web/MzQ5ZTg3YzctNDZmZi00MDMwLWIyYjktM2Y0YjdhYTdmNzcy_types-of-baseball-hats-classic-cap-1.jpg?auto=compress,format&rect=0,0,900,759&w=900&h=759', caption: 'Baseball Caps' },
            { src: 'https://i.pinimg.com/originals/4f/3f/0e/4f3f0ec142d44d902e362b2f612f0bea.jpg', caption: 'Business Sunglasses' },
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2R8PqJ7fUUo2itQ4YDWxVTrazKJYqfWF4A&s', caption: 'Fun Sunglasses' },
            { src: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/hair-accessory/s/i/7/large-matte-hair-claw-clips-hair-accessories-for-thick-thin-hair-original-imagk9tugftxyu6r.jpeg?q=90&crop=false', caption: 'Trendy Claw Clips' },
          ].map((item, index) => (
            <VStack key={index}>
              <Image
                src={item.src}
                alt={`Image ${index + 7}`}
                borderRadius="full"
                boxSize="190px"
                objectFit="cover"
          
              />
              <Text>{item.caption}</Text>
            </VStack>
          ))}
        </HStack>

        {/* Footer */}
        <Box as="footer" bg="gray.100" p={6} mt={4} borderRadius="md">
          <Flex justify="space-between" wrap="wrap">
            {/* Left Section */}
            <VStack align="start" spacing={4} maxW="lg" mb={4}>
              <Box>
                <Heading as="h2" size="md">Help</Heading>
                <Text fontSize="sm">
                  Help Center, Disputes & Reports, Buyer Protection, Report IPR infringement, Regulated Information, Integrity Compliance, Transparency Center, Submit report (non-registered users)
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="md">Browse by Category</Heading>
                <Text fontSize="sm">
                  Submit report (non-registered users) AliExpress Multi-Language Sites Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew, Polish Browse by Category All Popular, Product, Promotion, Low Price, Great Value, Reviews, Blog, Seller Portal, BLACK FRIDAY, AliExpress Assistant
                </Text>
              </Box>
            </VStack>

            {/* Right Section */}
            <VStack align="start" spacing={4} maxW="lg" mb={4}>
              <Box>
                <Heading as="h2" size="md">AliExpress Multi-Language Sites</Heading>
                <Text fontSize="sm">
                  Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew, Polish
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="md">Alibaba Group</Heading>
                <Text fontSize="sm">
                  Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688
                </Text>
              </Box>
            </VStack>
          </Flex>

          {/* Center Paragraph */}
          <Center mt={4}>
            <Text textAlign="center" fontSize="sm">
              Intellectual Property Protection - Privacy Policy - Sitemap - Terms of Use - Information for EU consumers - Imprint - Transaction Services Agreement for non-EU/UK Consumers - Terms and Conditions for EU/EEA/UK Consumers - User Information Legal Enquiry Guide ©️2010-2024 AliExpress.com. All rights reserved. 增值电信业务经营许可证 浙B2-
            </Text>
          </Center>
          
        </Box>
      </Box>
    </ChakraProvider>
);
}

export default HomeGarden;
