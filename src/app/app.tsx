import { AppRoutes } from '../app.routes/app.routes';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { MenuOption } from '../types/menu.option';

export function App() {
  const menuOptions: MenuOption[] = [
    { path: '/home', label: 'Home' },
    { path: '/contact', label: 'Contact' },
    { path: '/storms', label: 'Storms' },
    { path: '/register', label: 'Register' },
    { path: '/login', label: 'Login' },
    { path: '/createstorm', label: 'CreateStorm' },
    { path: '/profile', label: 'Profile' },
    { path: '/error', label: 'Error404' },
  ];
  return (
    <>
      <Header></Header>
      <AppRoutes options={menuOptions}></AppRoutes>
      <Footer></Footer>
    </>
  );
}
