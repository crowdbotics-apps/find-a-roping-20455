import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList104201Navigator from '../features/ArticleList104201/navigator';
import ArticleList104200Navigator from '../features/ArticleList104200/navigator';
import ArticleList104199Navigator from '../features/ArticleList104199/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList104201: { screen: ArticleList104201Navigator },
ArticleList104200: { screen: ArticleList104200Navigator },
ArticleList104199: { screen: ArticleList104199Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
