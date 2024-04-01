import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Ff%2Fb%2F7%2F301522.jpg&f=1&nofb=1&ipt=9ec29e7fff58c7172282dc979580a2a94ca50684ca43bca3748e637d6b8a98c5&ipo=images" width={100} alt="" />
      </div>
      <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Ff%2Fb%2F7%2F301522.jpg&f=1&nofb=1&ipt=9ec29e7fff58c7172282dc979580a2a94ca50684ca43bca3748e637d6b8a98c5&ipo=images" width={100} alt="" />
      </div>
      <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Ff%2Fb%2F7%2F301522.jpg&f=1&nofb=1&ipt=9ec29e7fff58c7172282dc979580a2a94ca50684ca43bca3748e637d6b8a98c5&ipo=images" width={100} alt="" />
      </div>
      <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Ff%2Fb%2F7%2F301522.jpg&f=1&nofb=1&ipt=9ec29e7fff58c7172282dc979580a2a94ca50684ca43bca3748e637d6b8a98c5&ipo=images" width={100} alt="" />
      </div>
      <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Ff%2Fb%2F7%2F301522.jpg&f=1&nofb=1&ipt=9ec29e7fff58c7172282dc979580a2a94ca50684ca43bca3748e637d6b8a98c5&ipo=images" width={100} alt="" />
      </div>
      <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Ff%2Fb%2F7%2F301522.jpg&f=1&nofb=1&ipt=9ec29e7fff58c7172282dc979580a2a94ca50684ca43bca3748e637d6b8a98c5&ipo=images" width={100} alt="" />
      </div>
    </Slider>
  );
}

export default Home