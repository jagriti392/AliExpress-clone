// import React from 'react';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {HStack, Grid,IconButton,VStack,Link, SimpleGrid,Heading ,Stack, GridItem, Button,Image,Flex , Box, Text, Center, DarkMode, ChakraProvider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaApple, FaInstagram, FaSlidersH,FaCcVisa,FaCcJcb,FaGooglePay,FaApplePay,FaPaypal, FaCcAmazonPay } from "react-icons/fa";
import './Bestsellers.css'; // Make sure to import the CSS file
import { RiMessengerLine, RiCustomerService2Line } from 'react-icons/ri';
import { SiPaytm } from "react-icons/si";
    const Bestsellers = () => { 
     
        const images = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJSz_5_rhoq21Ron-2HmZpLJg0wPYD3wjFA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXFwlWX_fO1bL_vG6EH5k77rJeWQfLPCgXg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08OcPvfZF1JDe0Q6IRaJ2FByiqybAe75yDw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcZujeAIw8quEr6KFKbhkuPgs1kdgTWMkSA&s',
            'https://en,crypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNt8JudUHOm_uMNXDi39-7hvlv-qwU0p65d398q5hwjmc580qZD-bVpCfQMi7Iz7KmndE&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9f8naSVUUZPDmSHaxJsWgt9Ay1qr6eu-yruwwaprSn1Ovdez6HZbfOfAqi7DCkDoKyy0&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5goCEQfnCCTkXB1ch5rkDHWcjIwDBn6v2A&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHPrGx37aMjiIEhnqrnx6UHv--mU9O5XprQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST45lMfYOs45EpRxBf-rL9AQRHmZkL2qUiYA&s',
            'https://m.media-amazon.com/images/I/81I2RLWwwPL._AC_UY1100_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZ8RdbQTUxingNmDBsyXaRzi30dqsdAvJaw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVR5Ibg262rP_z9lF_37sMKKc2OmxtGJQwVw&s',
                 ];
    
        const [startIndex, setStartIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 8, 0));
        setAutoSlide(false);
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 8, images.length - 8));
        setAutoSlide(false);
    };

    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => {
                setStartIndex((prevIndex) => (prevIndex + 8 >= images.length ? 0 : prevIndex + 8));
            }, 3000); // 3 seconds interval
            return () => clearInterval(interval);
        }
    }, [autoSlide, images.length]);


   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true, // This enables automatic scrolling
      autoplaySpeed: 1000, // 3 seconds delay
    };



    const image = [
      'https://www.codes91.org/wp-content/uploads/2024/05/aliexpress-banner-ww-jun-24.jpg',
      'https://www.codes91.org/wp-content/uploads/2024/05/aliexpress-banner-ww-jun-24.jpg',
      'https://www.codes91.org/wp-content/uploads/2024/05/aliexpress-banner-ww-jun-24.jpg',
      
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: FaSlidersH, // Enable autoplay
      autoplaySpeed: 3000, // Time in milliseconds for each slide
    };
    


      
    
   return (
   
        <div className="bestsellers">
          <div className="features-section">
       <h1 className="heading">Better Choices, Better Prices</h1>
    
           <div className="description">
             <div className="icon">$</div>
              <div>
                 <p className="title">Value for Money</p>
                  <p>We offer competitive prices on millions of items.</p>
              </div>
            </div>
        
          <div className="description">
             <div className="icon">🌍</div>
              <div>
                 <p className="title">Shoppers Worldwide</p>
                 <p>More than 300 million shoppers from 200+ countries and regions.</p>
              </div>
           </div>
              <div className="description">
               <div className="icon">🚚</div>
               <div>
                  <p className="title">Fast Delivery</p>
               <p>Faster delivery on selected items thanks to our improved logistics.</p>
              </div>
            </div>
        
            <div className="description">
            <div className="icon">🔒</div>
              <div>
                 <p className="title">Safe Payments</p>
                 <p>Safe payment methods preferred by international shoppers.</p>
              </div>
      </div>


            
           <div className="description">
              <div className="icon">🚚</div>
               <div>
                  <p className="title">Fast Delivery</p>
                  <p>Faster delivery on selected items thanks to our improved logistics.</p>
               </div>
            </div>


            
            <div className="description">
            <div className="icon">🚚</div>
               <div>
                <p className="title">Fast Delivery</p>
                   <p>Faster delivery on selected items thanks to our improved logistics.</p>
                </div>
          </div>
          </div> 
        
         <div className='image-container'>
           <div>.</div>
         </div>  



 <Box display="flex" justifyContent="space-around" mt={7}>

      {/* Left Box */}
      <Box
        bg="blue.99"
        boxShadow="0 3px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="md"
        padding={6}
        width="fit-content"
        color="white"
        marginLeft={5}
      >
        <Box display="flex" width="280px" justifyContent="space-between" gap={3} bg={'black 100'}>
          <Button colorScheme="green" size="sm">Register</Button>
          <Button colorScheme="green" size="sm">Sign In</Button>
        </Box>
        <Text textAlign="center" mt={2} color="black">
          Continue with:
        </Text>
        <Box display="flex" justifyContent="space-between" mt={4} gap={2.5} boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" p={2} borderRadius="md" bg="white">
          <FaFacebook size="1.5em" color="#3b5998" />
          <FaTwitter size="1.5em" color="#1DA1F2" />
          <FaApple size="1.5em" color="#000000" />
          <FaInstagram size="1.5em" color="#C13584" />
        </Box>


 {/* Right Box */}
 <Box
        bg="green.200"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        borderRadius="md"
        padding={6}
      
        color="white"
        marginTop={9}
      >
        <Text fontSize="xl"  mb={2} color="black">Welcome Deal</Text>
        <Text mb={4} color="black">Your Exclusive Price.</Text>
        <Box width="250px" height="160px" overflow="hidden" borderRadius="md">
          <Slider {...sliderSettings}>
            <Box>
              <img src="https://i.pinimg.com/originals/0c/23/a3/0c23a3a886b03c4eab52ad4372217c15.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Box>
              <img src="https://www.shutterstock.com/image-photo/portrait-cute-smiling-boy-dressed-260nw-2403280001.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Box>
              <img src="https://c8.alamy.com/comp/2A9749M/punjabi-indian-and-asian-childrens-clothes-traditional-kids-dresses-and-suit-on-mannequins-in-shop-window-display-southall-london-uk-2A9749M.jpg" alt="Image 3" style={{ width: '100%', height: 'auto' }} />
            </Box>
          </Slider>
        </Box>
      </Box>
 </Box>

      
      {/* Right Box */}
<Box
  
  right={1}
  bottom={0}
  bg="yellow 150"
  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
  borderRadius="md"
  padding={4}
  color="white"
  height="250"
>
  <Text fontSize="35" mb={2}   color="black">Bestsellers</Text>
  <Text mb={4} color="black">Get discount on popular items.</Text>
  <Flex direction="row"  gap={4}>
    <Image
      src="https://5.imimg.com/data5/EL/GV/MY-42381219/ladies-sweater.jpg"
      alt="Image 1"
      width="260px"
      height="auto"
      borderRadius="md"
    />










    
  </Flex>
</Box>








{/* Right Box */}
<Box
  
  right={1}
  bottom={0}
  bg="light.800"
  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
  borderRadius="md"
  padding={4}
  color="white"
  height="250"
>
  <Text fontSize="35" mb={2}   color="black">Welcome Deal</Text>
  <Text mb={4} color="black">Your Exclusive Price.</Text>
  <Flex direction="row" gap={4}>
    <Image
      src="https://media.istockphoto.com/id/1435512685/photo/childrens-things-hang-on-a-hanger-in-a-clothing-store.jpg?s=612x612&w=0&k=20&c=14YFAd0nE0yTll8O6gmqpGIa8cfk_I2LsyISDAyL9G8="
      alt="Image 1"
      width="150px"
      height="auto"
      borderRadius="md"
    />
    <Image
      src="https://content.jdmagicbox.com/comp/ernakulam/d5/0484px484.x484.180705212809.x2d5/catalogue/care-kids-wear-ernakulam-95mqxd4mrb.jpg"
      alt="Image 2"
      width="150px"
      height="auto"
      borderRadius="md"
    />
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQzA7sSi6Kv37YAnT2lWUJ5X3AsGrGgZCXw&s"
      alt="Image 3"
      width="150px"
      height="auto"
      borderRadius="md"
    />
  </Flex>
</Box>
</Box>
         







   {/* Image Slider with 8 images in 2 rows
      <Box mt={10}>
      <Box mb={2} fontSize="35"   marginLeft="50" fontWeight="bold">More to Love</Box>
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          {images.slice(0, 4).map((src, index) => (
            <GridItem key={index}>
              <Image src={src} alt={`Image ${index + 1}`} borderRadius="md" />
            </GridItem>
          ))}
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
          {images.slice(4).map((src, index) => (
            <GridItem key={index}>
              <Image src={src} alt={`Image ${index + 5}`} borderRadius="md" />
            </GridItem>
          ))}
        </Grid>
      </Box>        */}
               <Box mt={10}>
                <Box mb={2} fontSize="35" marginLeft="50" fontWeight="bold">More to Love</Box>
                <Grid templateColumns="repeat(4, 1fr)" gap={8}>
                    {images.slice(startIndex, startIndex + 4).map((src, index) => (
                        <GridItem key={index}>
  <a href={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJSz_5_rhoq21Ron-2HmZpLJg0wPYD3wjFA&s${startIndex + index}`} target="_blank" rel="noopener noreferrer">
    <Image src={src} alt={`Image ${startIndex + index + 1}`} borderRadius="md" />
                             </a>
                            </GridItem>
                            ))}
                          </Grid>



                <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
                    {images.slice(startIndex + 4, startIndex + 8).map((src, index) => (
                        <GridItem key={index}>
                              <a href={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcZujeAIw8quEr6KFKbhkuPgs1kdgTWMkSA&s${startIndex + index}`} target="_blank" rel="noopener noreferrer">
                             <Image src={src} alt={`Image ${startIndex + index + 5}`} borderRadius="md" />
                </a>
                        </GridItem>
                    ))}
                </Grid>





                <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
                    {images.slice(startIndex + 4, startIndex + 8).map((src, index) => (
                        <GridItem key={index}>
                              <a href={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcZujeAIw8quEr6KFKbhkuPgs1kdgTWMkSA&s${startIndex + index}`} target="_blank" rel="noopener noreferrer">
                             <Image src={src} alt={`Image ${startIndex + index + 5}`} borderRadius="md" />
                </a>
                        </GridItem>
                    ))}
                </Grid>









                <Box display="flex" justifyContent="space-between" boxColor={DarkMode} mt={4}>
                    <Button onClick={handlePrev} disabled={startIndex === 0}>Previous</Button>
                    <Button onClick={handleNext} disabled={startIndex + 8 >= images.length}>Next</Button>
                </Box>
            </Box>




            <Box maxW="1500" mx="auto" my="30px">
      <Slider {...settings}>
        {image.map((src, index) => (
          <Box key={index} px="10px">
            <Image src={src} alt={`Slide ${index + 1}`} borderRadius="md" />
          </Box>
        ))}
      </Slider>
    </Box>













    {/* <Box
      as="footer"
      role="contentinfo"
      py="10"
      px={{ base: "4", md: "8" }}
      bg="gray.800"
      color="white"
    >
      <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={8}>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="4">Customer Service</Text>
          <VStack align="start" spacing={2}>
            <Link href="#">Help Center</Link>
            <Link href="#">Transaction Services</Link>
            <Link href="#">Agreement for Non-EU/UK Consumers</Link>
            <Link href="#">Terms and Conditions for EU/EEA/UK Consumers</Link>
            <Link href="#">Take our feedback survey</Link>
          </VStack>
          <Text fontSize="md" fontWeight="bold" mt="4">Help</Text>
          <Text fontSize="sm">Here to help you with any questions or concerns.</Text>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="4">Shopping With Us</Text>
          <VStack align="start" spacing={2}>
            <Link href="#">Making Payments</Link>
            <Link href="#">Delivery Options</Link>
            <Link href="#">Buyer Protection</Link>
          </VStack>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="4">Collaborate with Us</Text>
          <VStack align="start" spacing={2}>
            <Link href="#">Partnerships</Link>
            <Link href="#">Affiliate Program</Link>
            <Link href="#">DS Center</Link>
            <Link href="#">Seller Log In</Link>
            <Link href="#">Non-Chinese Seller Registration</Link>
            <Link href="#">Student Discount</Link>
          </VStack>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="4">Pay With</Text>
          <Flex wrap="wrap" spacing={4}>
            <IconButton icon={<FaCcVisa />} aria-label="Visa" variant="ghost" colorScheme="whiteAlpha" />
            <IconButton icon={<FaCcJcb />} aria-label="JCB" variant="ghost" colorScheme="whiteAlpha" />
            <IconButton icon={<FaGooglePay />} aria-label="Google Pay" variant="ghost" colorScheme="whiteAlpha" />
            <IconButton icon={<FaPaypal />} aria-label="PayPal" variant="ghost" colorScheme="whiteAlpha" />
            <IconButton icon={<FaCcAmazonPay />} aria-label="Amazon Pay" variant="ghost" colorScheme="whiteAlpha" />
            <IconButton icon={<FaApplePay />} aria-label="Apple Pay" variant="ghost" colorScheme="whiteAlpha" />
          </Flex>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="4">Stay Connected</Text>
          <Flex wrap="wrap" spacing={4}>
            <IconButton icon={<FaFacebook />} aria-label="Facebook" variant="ghost" colorScheme="whiteAlpha" />
            <IconButton icon={<FaTwitter />} aria-label="Twitter" variant="ghost" colorScheme="whiteAlpha" />
            <IconButton icon={<FaInstagram />} aria-label="Instagram" variant="ghost" colorScheme="whiteAlpha" />
            <IconButton icon={<RiMessengerLine />} aria-label="Messenger" variant="ghost" colorScheme="whiteAlpha" />
            <IconButton icon={<RiCustomerService2Line />} aria-label="Customer Service" variant="ghost" colorScheme="whiteAlpha" />
          </Flex>
        </Box>
      </Grid>
    </Box> */}


<ChakraProvider>
      <Box p={4}>
        {/* Top Heading */}
        <Heading as="h1" mb={4}>Accessories</Heading>

        {/* First Row of Images */}
        <HStack spacing={4} mb={4}>
          {[
            { src: 'https://images.meesho.com/images/products/84680802/vtobp_512.webp', caption: 'Popular Sunglasses'},
            { src: 'https://rukminim2.flixcart.com/image/850/1000/l2z26q80/sunglass/m/x/u/free-size-trendy-blue-sunglasses-stylish-petals-original-image795hz6hpqtj.jpeg?q=90&crop=false', caption: 'Womens sunglasses' },
            { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWcOkCz-h8SuZNMjUP8kB5p_9pC_aec4QQQ&s',caption:'Hijabs'},
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswslIfHlkkOl0ye6HjK1Cig7zsJomnK8bXQ&s', caption: 'Kids Hairs Accessories' },
            { src: 'https://m.media-amazon.com/images/I/71VjJ+4TeyL._AC_UF1000,1000_QL80_.jpg', caption: 'Trendy HairClips' },
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUXGBgXGBcYFhgXFRgXGBUYFxcXFxgYHSggGBolGxcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0rKy0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIAMcA/QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xAA/EAABAwIDBQYEBAYBBAIDAAABAAIRAyEEEjEFQVFhcQYigZGh8BMyscEHQtHhFCNSYnLxgjNDkqKDwhUkNP/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACARAQEBAQACAgIDAAAAAAAAAAABEQIhMQMSQVEEYXH/2gAMAwEAAhEDEQA/APUHhR3KRUUSq5eH+T6ejkkpELOlzr5F6rqIiNQM6I1yeaqLCUBCq1g0FzjAGpWd2lt4vGWmCGnfvP6L2fD8PXyevX7c+upFjtTbLWS1hl3HUD9Sspi8cXOknfqUyrU4qBiK4Gm/xX1vi+LniZHHrq06tXc4kR5qO05QZ1QalaASdTx4KJjMSddN24LqybtDGF035D9lU4qvlEkSdxR31Mxv6fVNqsBbGspDOuJLpVngRJ9LKLVogGB5J+zXmYF3Gdd36KhW2QOdlAsPm6cPFSKhDt8brcBuG4BDpsDWwDPE/wBRRKVh7hFSPXbx3WXvPYGvnwNA/wBgb4C32XhFYe5gL1v8Lce3+BOZ3/TLweQ+YfVFDKfjPtV9fEUsMz/p0jL7mDUI7sjSA2T/AMljDhXAXI8FscXsQ4qniK+YueXmoACJJBBjyssliqg4WTwOkOqIUOhhDXr06Y/M4TwAm8omIetP+HGw/jVHVHNJAhosYJkE3FuSevSj1vsbXqfA+BVMlpc0O0JaDYf5DipHaXabaFB7n2DB3N2d/wCUDnMJG4BtNr3MY1vzEWg8tNNF55+Jm3fjPZhmGWMAc4jXMRIB5gH1WefBvlhMVVfVqOe8y9xJcdLkpjxHv6BPcL2/fRMyTflpr9FsK3H0iDmAtofsojmnhCunAGxVJjiWnLfl03LNMCrVRoNOKdRwrnCYMIuDwRcZd4K7FKBaI6wqKvoyqVCqqZUXMoheD5udjvKq4XQVa/wwXHDBfPv8eus6iplEa9T3YcJnwAqfBYrWK7WbQJzMHyt1681U0sQMgJuSLInaWrIqDdmceF5OsrPYHFj4Q/qHpdfb+Pic8SR5bdq2q15tHLgq7FVIOsnhyXGsT4nl9UHFDcYvv97l0gR6teTa3JBrPMRJ53TX69ecBCqPPikOonjfejZwVL2LsDE4kxRYSN7zZg5TH0Wywf4bsaAa9d08GAAeZmUWrHm9agHbkelgRTFzDol3GDYNJ4r1EdjcDSGdxfbeX/osltnZ9Ki7uU3lv9zyZB/yB9IVPNLOh2/VGYY19F1TDg3p+LI7w6DeOkob3e/sISDawb7/AGWz/DDEPLMRQYGkOLSZJBE2PHgsU8aHXp91ofw3xgp4wtJIFRkAyRcGw9SqQV62zBCnQIyTZx/KRoTvXgu0MM8WLQDydMcjbVe/9oquXD1HB2jMu4/MQ3dyXiO1gATG9PIrJU6he4NAOYmIPHRfRHYfY38NhKLSQCW5jAvmI563K8M7LYMOx1NrgS3PNpJ0Jm26V9K0GgDusgAACbaDzRVFH2px9OjQqvJPdERmcJMCBrvJXh1eqXEvce86S48zP1W9/Eza5e5uH3Al74dbg0acL+IWAqVLohCey8k+XuUwOAFhPJc8pGMm2/itIjxe0feU3G4XMwPiS3XopFKlcE296o+IrNp03Ei5sAfG6CrKTE9/NAwdaRYe9yM7n9VB9IwisCY0KVSpLx9TXbQ4TSFJNFMdRXO8VqdIrkxSHUE34Cx9KftHk3aL5qo/udyGpWPwr8pLec+C1XaGt3nRvLvr+6xmI7rwRvtZfR59OF9rWi7vSEbFRqJ9IUHD17idZVjXENnju3wlKw63hSNl0mueB8F1YyO4HFrb2AcQJEmBqOqBUOq9T7K9mG0GsqYgd43YwXIlol7p0Ji03AMWujq4pNZ/DY3a72tZTpUMJS/K2Z7pEiPhyCUYbFx4BfWxjyBOlJoExYZnuM+AW/dtfDMkyyd5mXeJ1WI2p2odUxJDx/J+UAWjnzWYWXxtTGjSs2o2T3XNgx1Z+ij1+09QNAxVIhohuezgJEjvAcOq2GJwDHtzsuFT1e7Y8/UQfQrpJ+mb/ajeGPAewyNQQkc4O+ezv6uP+Q39dVOq4VgBLA1vy2a0AWBzF0ak6yq8t4rtJs8ue5UbEUXDXQ79yJ2exXwsXQqWtUA/8u7fzR2cDp9FW7UwTqbpHUH181i855a3fD3LtXjAcLU7sHu3sdCN4Xj+NfJV1iO0zqzaNAPDopmpUIEd9ws033AnzWexLrongDbGe5mJw5p2eagaNIIdY5p3L3La+PZRoPe5/wAjNARMxMfReD7GxH/72G/zIG68GF6B+KG2icmFFiSHvvNhZo8TfwV15UYPE13Pc6o6czzJ433KE4RqpFQDy3cuKDVII48efqstAOO+3v7p9KmCZB4IY4bvorCjSjdusOqUVhG/TeeHFZvbOPNR+UHui0KVtzH5f5bbE/NH0VdhKEX3rJSsK2AFLYyd/kgRdEjp4pD6aw7ZKsqbFCwDVYtC4cx06puVJkRIXQtYzoXw0ypTsehUiEDG1MtN7uDSfIIxa8L20BmPX1WT2lS81qtp1JmePuVnNpC8TZdIqh4atp9VomiWiNVk6Jh2XgVssEWBjXPAcBDiCYkNuWm2hAjx3KS07E9mqmIPxsuWkHdyoW5jUgg52B3dDJ0JB/TbY7sl8YRWr1ahv82Q65t2WN//AKhZGp+KrCWtex9EEWAHdiLRpbgrPA9v8HF63eOgcY+uqz5IOM/C6gT3XZbz+cDWYAa8BZXa3Yd9E/y6x/4vOXycHeS1m3+2v8r+QdQe99gdFRbI7UUnU8lVwDp1P7rUCrw9bHYeBlzjSR3Z8Lt9Wq1qYoP+ZuV2jhwIMH1U6rjBEscCOIVfnBMkSV05mM0n8POir8ZTLDdv2Pgp5xnwzmLCG9czY4zYtPKCOYQtqY+nULSLe7LU6n5ZsQMEA4yN2o3gxMFd2gb/ACw7cLHoj4mllAq07lo7wH5mbxHEajy3qRWa2rTtcOGvUSFr7TqeB9bzfLJ7BpGniDva5pgjnuUzaLoVa57qNT/E9JG8fdSdp1gYI0N1zzK0h4XFBmKw7ySA2q0kjWAbwtTtPGOq1alZxPfdIkSQ0WaLR+VZrYeA+LVzEd1lz13K6xVT2fsiqI1RvLXfvKA43nf6qRqPtfghtngOiiXD0rGfHkmbRxgpM/uPyjh1ClWDTUOjfXfCy1as6u8uOk6LNJuGpl5LnalTnMAi8+SUDKI+yWYv78FAjb9EVrep8UkJ5B4pT6g2eLKcFDwOimBceWqVcuXLQcqftbXyYWpzhvmb+kq4WR/EXFZaTGA3JLvIQPU+ijHle13SbemviqHGERG/ip2MryTff4KBijOl/olKWpZwPFbrYmEdWYym1wYXd3PMBs2knksphdkVcTVZSoDNUedNAOJcdzRvK9Yp4fC7OY2k8irVDe8d06xHCY8lVSKjavZ2hWqEYQPe22jXGkIJPeqVIa+5OkqEPw6woj47xI1DCSSI4CGgzyR9r9unO7rO6OSp6G2iTcklRaqnsrCNbkpNynjodI0bAWP2vs8EvpvDe60kOs0gNH5nbxHGTpCjVO0IY8l1bjLWguPlIHqqLaW3alY/Icml7zAgFx0J5LUuexWg7OYZ2UhriROkyf8AQ4rRU6LWC+qxmyMRVa2GENFpAg6DU71cMOIdr8NwF9HA+BB+oI5LUDQESFmtoYTKS6mJGpZ9S3+7lofVSHbYc3uvBadBwPQ7/Q8lFGPJOiOr4XM8rXZT2vaC0zI096ITW/BqfD/7b5LLQGuuXM8dR48lXNqmk74rPlPztG7+9oGp4jf1F7utkxFKAdYLXCCQdWub4wVx56vN2Otn2mVnu1ODiHjoVRCp/Ljh9NVsKZ+LTdSqCKg7rhz3EX0Oo/ZZulhMjwH/AC5rnodV6r58x5vXirrZWG+DRBM5nS4jr+yC9wM7xulSMZiJ4W0nhwVcHZj57/oubbiYv7nqiUWbyYAuXcOi6k3WIg6ncAqbbO0S8/Cp/KNTxKrUBtDGGs/K09wesI9GkBYWQsJh8olSHeX6IRXEpGNvEesLuG7w1RaVj4JRAPNFafd/0TC7yTs3uFF9OYN1lNDlS4XEKWcYOK4yGp+ZLKrxjBxRWYkFIS5Xlf4m7RmvlB+Vob46/del1MQA0uO4ErwXtVtE1Kz3GJLimFUVn6koVGk57gym0ue85WgXJJ3BEiRMr0z8O+zIpU/4up89Rp+G3+lptm6uHp1TbiG2TgKOysPmdDsQ5svcNeOVv9o9dV5RtfaNSpUfVqODWkkguMSNe6NT4Ledr69d9Z1GjSDnyCXuktbZsNDIlxvJPygOF1SYP8Pa1Z/xsbW6l3efHBoPdYOUGESGsQMbJ/lUjUP9TpDT0AN/NFp7LxlcXDspvDRDfsPqvR8BRwVOs6nRYIYLvec73HqdByCl7S2rRaB3hY8dyVjB4TsSRGdwHgCfPTerg9jKTWkkzA38UTafaimYyCSPf1AVPiNt13yBYaqiJieyzMs03FrheQhbP2hUonLWII0B0JtOnIJmI2yKYOapLxoGkH6W9fBZ3H7WdUJOl5AHFb+0ZxsMRi6dQQQCCqk1TSNpezh+YDkTqOR8CFSYXGmFYUq8rFpaDBVWvALSCD7Ot7LqL3YZ0/8Aacf/AAJ/+pv0PiqSk8sdmpmDvEnK7rG/mr/AY9tUZTYjVp96c9/os5+m9Fx4Miqz5gLjTM3gee8fuouPrMdRe+RpI4zMec2UmjgSyw+Se6JuD/T04cPJU+2a4e8UadxMvO7oF6OevrPH5ceptdgKVR9MOOjYE9dLdLKThqWZuacoG+5JOmik4ZxZRcfykgAccnDq4hvgUGllaMo1E5uZOseJKvqtVu38Q+m0U2Ahp/PEB3jx5KpwmHgSR1WpEEXFjIncdN0blWV8APyHj3f0P6rN5WomYcCiC+nWVGc/KSDY6X1RP4ga3+3mbLJGa0z780Rzfeigu2k0e5+iDU2vwHorYVowXCQ4kDfPS/nZUVTaDjw+vpokp4mqdC7wmPRGp9N06oTnulVWGcVOa6y62Rx2nF5RaOII3qK5y7Ms2LR9u7Ry4d5m5ELw7H1y6od8r0rtnistACfmP0XmjW5niN6547T0l4Wl3br3LB4qkGMpNcC6mxgcBfLLQQHcDF41uvImUcgaBANhe4zEwCeIkrWdqduMwobhqAiBLjvc53ec5x3uJJJPEorUanaW1qVFpeSF5B2o7a1KriGExO5D2hUfXPfeQ0rOvoNzkUml2ozVNOoaN0zcnwUkZmKqFxIJk66oxxjR/wBR+Y/0gyfFOqbOqv8Amcek5WjwFoWm2d2CbkbUq1Q0G4DRfxJ/RSZN20jEUqZGt3QfSLfugVPj1bOceGVoi3AAL0b+CwNEfJnP91x5aJh201tqTGjgGtA+i1gYfB9mKz/yED+pwgf+yftDYL6esPjUR9DErUv2lVuZA47yOZ4Krx+26YBz1M7riGwehJ0g337kzBYyWIphpGWQCJg6i8RO/qiUqiJjpqfzIAG4DRo3eB+qiMcs1LSjXUtne0sRoRqP16FVFN6mUMRcAILRvxbmUz8UwQJFtbGCP0VZsXBl5a0fPVOvAaud4CUHG4k16jWflET0/wBq0wGKFFlWoLvMUKQPH856aDxK3KknaVVpfkZZlOGtHPQdbSeruSjs3+fDeoYsBN982mZknx1T2630nXct6wmMdz8fL34pwEnmb+KA91932lFFtTccfOJ3futADF4Nrx3uFiLOHj/tZzE7Fqt0hzf6pA8wTIWleZPL78kYADd5/ZZvMplZEbKO946AE/oplDZVOJJc7pYeiu8Rh2kWGU8tPH9lAeCyx9PsVm84dCbh2NIysHWAemqK0kWmyVzhFuX1/ZDzRx8EF7tRwBCM6nAVoWKDiwr7az9cQHuXZkB77pM60xjI/iDirtbwH1WVwUEDjPorLtpXzV3+A8gonZ7BOcZG5c3aLHbBy055TPS8KFtzED4md38yo4AhgPdaNA6q4aAxZoudZaIJndpGwwMbcwfooDsQxuGgtGc1ahcd57xaPINA8AilU/xD3HvkDkBlA5ABOfVY0a3T6OV2uh9EzaGzqVJvxKjiQSA1rYlxMnrEA6clYkU41zjDTpdWY2tXc0NecrRaSQ0COZIVZR+I+1CgKcwMzpfUiTygajhorjZ/YapV79aof/kkz/xm3iUhBqbZojQuqng0W6EmAOolBbj8RUtSphoO+7j6WWtOyMDhmiSHuF4NwOg0UDGdp6bBFNgHQJSkfsPEVBNQnobR0AgKvr7L+F3iGnx06iVOxHaCq8w062UHFYgmxMnU668OBjiFeA5psoVZg6cD9jyUhtQQomJKCG8luv8Avmn06sXQWVItqOBRH0SRLbtGvEcihC4TEEEkan2FaYJ2ciR3adhzcbuPXd4qkzxYa6QryhSysDZ5m2vH1WoKlZ5OvvoiA/TjvQQdbxu8U6m4b9J08961oSAzgd3767vHinvqzd3n75KO2pxH++aUuB4aeKdAscOaO4WHv3CiGdPva+miIH356LWhIqN3W9/ZRqlPdqN/vWUUPmJTxTkemt1JCGBn5XDlP6ob9m1f6Z6FTg2DO/3ZPou4g+v2WbDK99cqvHusrN+ip9pOXnjrVM990rHKO43RBoei62syPOdvS/EEDeSr+lkw1IT85Enkq7AUJrPqu+VhJ6ncFW7ZxT6jo4mIjyQl7sTDPxLwf63OceApUYcY/wAn5WrPMFN9DM9+VuZ5kNzOOao4hrWyMzjNhI6gK/xFc4Rpa2xbhXNkG8vqMDjyvKx+Dqgmk0Du0w53mcrfIB3ms0jjEEjJTYKbAZgkOquPF74A/wCLQAOZug1MadDBAQ8XVLHngVAqP4HolLWjtgtIgAAHcp+0e19R4iYHALKOcdIMpfjZBJ72ojdbiVBMrYx9SdSk/hxEucZ4D0JJtHRDwGIc/MSQOAAgCSSco3JahSi1qu5oDRwGscCdSFGcbpz3ISkIHoNYhcCmVChBlTn4g06OQWdU7x4hugHiolBgLhOmp6C5QsRUzOJPsbgpJuyKJcS83DeP9R0g+Eq3zmb7ve5CwbBTY1pBB+Z195/Sw804x58VqA81pH06JC9ODePAkH9kwDw529/7Sj802mEWkTHPysFFjdz1/ZK10K1J9Ibz1XZpM8fLn9rINOoYul10j6depWtZGj3uRWVuYtx6KKTPP1H+ktGp+3iffkrVibnG77JLb7eaEDpGo5W5eynZZ4H0WvYfQdTRUm01c1NFUbQGq8juoWsuj1KfdPROpNugbUxoYInqtbtPqM47A5aYZvMud14KTsvZjWEOcJOvQcTzUepigZqH5W6c3fopey6xcwOOryXeG5bYZXt5Wiq2/wA9MtjxzD1asjSxBa+TvAHQDRav8SQcrHcND4ysWHh7eYQErGYifeiguPBMLzvSwpDuc2LkwN28nffcFFr1JPAaADQBLV1TKYnwUkrZz4nmjlyg0LI2ZSOKY4rpTSVJ0pHpFykWj+bon7Lw+Z4MSG948LaDxP3TGaHop+A7tP8AyM84Fh9/NSSalQze87zqkD/f0Q8w1XSkDGrx93XFyFCVvVRGaATf37hJMHX/AEmh+v8ApMzD36pQ9Od0+wjN0kevu37KGx8b7+sIzXqlAznX8PfVNabcNBvukaeBi32S5tB709EoVr/31G5Fp1tbe/ZUGRxRRVcPldHQxPkmUY+kniyqdoDVXDtFU48LzusUrqgY1zjoASsPVc/FPnNlpSSXcQNYWv2xQzUnMJjMQOcb1ke01cU6EN7sw0AbgFvldIe2K4Jaxlm2DR6CeJlaPCvAMAaNyjhYLJbHh7aBOoLiejCT+i0uBq+Jg/6WmYpPxCpj4DTvuvN6LiLgr1jtlhg6j0v+y8yxGDgZ2/L9ECuFRjtRHhI/ZNqNZud6FAKXKpG1CpGCo9xzj4c0KjSzOa2YzEDzK1e18IzDYcUwO+/Unc0ax1NvNFMZN1kocm1Ddc0pZEaUoTWojQpGJYSkJWhRPpU8xjjZTajRMDQD6aKLREEEWUqlSzcd90oBxTfiQpNfDEb5UZzAhHGsU5r+an0mEMkOBYRdpMjQ2jj5QojcM0iRmDt0kEH0BHW4SCzx5pM6G5jgASLHfII9N65j5URCdEjKh0TCVwNrqSQKqc4iN6jApcykJ8ROBlAP3TmPPGFJ9Ru0VbilYvVTtWplY93BpPkFzxrWSx2J+JVIBs2w671552yx+erlGjLDrvKvtg4/MKjt8uPmFidqvJqG+9bDSbBIFBp3xU9XAfRaDAVIa08RBvxWb2V//JPVv/uSVYYHFHIDMx9lKLraLBUZU390+hXnNAgVH03fK4H1sfHet7gcW0uczf3pIdIcS3dwjReabUxH86QIgn6pgqHUpFpLXaiyPhcLUqnJSY57uDQSY4mNBzKuMLs9mJqU89VtFsHO90kho0gD5nbh+y1tXtZhMDROH2fSvEOrVB3nneY38psOCsVqmw3ZluCYK+MINZwllKbjrz57lmNqY91V7nOMyfCNwHIJdpbTfWcXPcSTqSZJ8SoDir/AETdPahhEahCsRQEOmjgJQaVrU4hOAG9SOpC6sKIsoVEKY02UTq9QKorKwqlQ6rEJGL+N1M//ACRyZYHXfCiuYmFqktn1aYZ3XXIgtI6aynVaJyd5oBHyvAieIcBrblw1VLdF/iXWBJgaXsoJlSlAlr83EEFp6gb0Jrk6tj8zYygHeZQQ6FIeUgdxQ8yUOURQ5IUwFdnUn1W8qn29hi+hVA1LHR5FKuTzBa8N7M1yHuYfe5Ve1m94kLlyCtNl15whH9NQk9IRsNiMotP9Xju8JISLlJdYN4ZRot7pfUrgTBzANBc8SLQV51tJ2au/hmP1XLlJznmNUIlcuUjShVClXKBjUVoSrlIZqkNauXJRITguXJQtAaqSHeS5chBuUd7L2XLlEJzU11NcuQAnMTMq5comlq665cpODynsq3XLkIVrguJXLkp//9k=', caption: 'Leather Gloves' },
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
            { src: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597063438-41ZgVVAGPfL.jpg?crop=0.938xw:0.938xh;0.0620xw,0.0620xh&resize=980:*', caption: 'Funny Masks' },
            { src:'https://i.shgcdn.com/5a61ad73-bdff-473c-941a-16a5a0c586b7/-/format/auto/-/preview/3000x3000/-/quality/lighter/', caption: 'Mens Sunglasses' },
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
        </Box>
</ChakraProvider>















<Box bg="orange" color="black" py="6" px={{ base: "4", md: "8" }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="9">
        {/* Left Column */}
        <Box>
          <Heading as="h1" size="md" mb="4">Customer Service</Heading>
          <Stack spacing="2">
            <Link href="#">Help Center</Link>
            <Link href="#">Transaction Services</Link>
            <Link href="#">Agreement for non-EU/UK Consumers</Link>
            <Link href="#">Terms and Conditions for EU/EEA/UK Consumers (Transactions)</Link>
            <Link href="#">Take our feedback survey</Link>
          </Stack>
          <Heading as="h3" size="sm" mt="6" mb="2">Help</Heading>
          <Text>Help Center, Disputes & Reports, Buyer Protection, Report IPR infringement, Regulated Information, Integrity Compliance, Transparency Center, Submit report (non-registered users)</Text>
          <Heading as="h3" size="sm" mt="6" mb="2">Browse by Category</Heading>
          <Text>All Popular, Product, Promotion, Low Price, Great Value, Reviews, Blog, Seller Portal, BLACK FRIDAY, AliExpress Assistant.</Text>
        </Box>

        {/* Middle Column */}
        <Box>
          <Heading as="h1" size="md" mb="4">Shopping With Us</Heading>
          <Stack spacing="2">
            <Link href="#">Making Payments</Link>
            <Link href="#">Delivery Options</Link>
            <Link href="#">Buyer Protection</Link>
          </Stack>
          <Heading as="h1" size="md" mt="6" mb="4">Collaborate With Us</Heading>
          <Stack spacing="2">
            <Link href="#">Partnerships</Link>
            <Link href="#">Affiliate Program</Link>
            <Link href="#">DS Center</Link>
            <Link href="#">Seller Log In</Link>
            <Link href="#">Non Chinese Seller Registration</Link>
            <Link href="#">Student Discount</Link>
          </Stack>
        </Box>

        {/* Right Column */}
        <Box>
          <Heading as="h1" size="md" mb="4">ALIExpress Multi-Language Sites</Heading>
          <Text>Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew, Polish</Text>
          <Heading as="h1" size="md" mt="6" mb="4">AliBAba Group</Heading>
          <Text>Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688.</Text>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8" mt="8">
        <Box>
          <Heading as="h2" size="md" mb="4">Pay With</Heading>
          <Stack direction="row" spacing="4">
            <FaCcVisa size="35" />
            <FaCcJcb size="35" />
            <FaGooglePay size="35" />
            <FaPaypal size="35" />
            <FaApple size="35" />
            <SiPaytm size="35" />
          </Stack>
        </Box>
        <Box>
          <Heading as="h2" size="md" mb="4">Stay Connected</Heading>
          <Stack direction="row" spacing="4">
            <Link href="https://facebook.com" isExternal>
              <IconButton aria-label="Facebook" icon={<FaFacebook  size ="30"/>} size="lg" variant="ghost" colorScheme="black" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter size ="30" />} size="lg" variant="ghost" colorScheme="black" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <IconButton aria-label="Instagram" icon={<FaInstagram size ="30" />} size="lg" variant="ghost" colorScheme="black" />
            </Link>
            <Link href="https://messenger.com" isExternal>
              <IconButton aria-label="Messenger" icon={<RiMessengerLine size ="30"/>} size="lg" variant="ghost" colorScheme="black" />
            </Link>
          </Stack>
        </Box>
      </SimpleGrid>

      <Text mt="8" textAlign="center" fontSize="sm">
        Intellectual Property Protection - Privacy Policy - Sitemap - Terms of Use - Information for EU consumers - Imprint - Transaction Services Agreement for non-EU/UK Consumers - Terms and Conditions for EU/EEA/UK Consumers - User Information Legal Enquiry Guide ©️2010-2024 AliExpress.com. All rights reserved. 增值电信业务经营许可证 增值电信业务经
      </Text>
    </Box>
    </div>
  );
};
export default Bestsellers;
