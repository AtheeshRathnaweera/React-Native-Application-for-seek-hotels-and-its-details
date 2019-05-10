
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './App/ComponentFolder/Home';
import Welcome from './App/ComponentFolder/Welcome';

import DisplayHotelDetails from './App/ComponentFolder/DisplayHotelDetails';
import GalleryDisplay from './App/ComponentFolder/GalleryDisplay';
import PricesDisplay from './App/ComponentFolder/PricesDisplay';
import RatingsDisplay from './App/ComponentFolder/RatingsDisplay';


const MainNavigator = createStackNavigator({
  
  welcome: Welcome,
  home: Home,
  viewHotelDetails: DisplayHotelDetails,
  galleryDisplay: GalleryDisplay,
  pricesDisplay:  PricesDisplay,
  ratingsDisplay: RatingsDisplay,

})

const App = createAppContainer(MainNavigator);

export default App;



