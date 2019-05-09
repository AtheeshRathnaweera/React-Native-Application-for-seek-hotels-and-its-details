
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './App/ComponentFolder/Home';
import Welcome from './App/ComponentFolder/Welcome';
import SignIn from './App/ComponentFolder/SignIn';
import DisplayHotelDetails from './App/ComponentFolder/DisplayHotelDetails';
import GalleryDisplay from './App/ComponentFolder/GalleryDisplay';
import PricesDisplay from './App/ComponentFolder/PricesDisplay';
import RatingsDisplay from './App/ComponentFolder/RatingsDisplay';


const MainNavigator = createStackNavigator({
  
  welcome: Welcome,
  signin: SignIn,
  home: Home,
  viewHotelDetails: DisplayHotelDetails,
  galleryDisplay: GalleryDisplay,
  pricesDisplay:  PricesDisplay,
  ratingsDisplay: RatingsDisplay,

})

const App = createAppContainer(MainNavigator);

export default App;



