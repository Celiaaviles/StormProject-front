import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MenuOption } from '../types/menu.option';

const HomePage = lazy(() => import('../components/home/home'));
const ContactPage = lazy(() => import('../components/contact/contact'));
const StormsPage = lazy(() => import('../components/storms/storms'));
const Register = lazy(() => import('../components/registerform/registerform'));
const LoginPage = lazy(() => import('../components/loginform/loginform'));
const StormPage = lazy(() => import('../components/details/storm.details'));
const ProfilePage = lazy(() => import('../components/profile/profile'));
const Form = lazy(() => import('../components/createstormform/createstorm'));
const ErrorPage = lazy(() => import('../components/error/error'));

type Props = {
  options: MenuOption[];
};
export function AppRoutes({ options }: Props) {
  const paths = options.map((item) => item.path);
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path={paths[0]} element={<HomePage></HomePage>}></Route>
        <Route path={paths[1]} element={<ContactPage></ContactPage>}></Route>
        <Route path={paths[2]} element={<StormsPage></StormsPage>}></Route>
        <Route path={paths[3]} element={<Register></Register>}></Route>
        <Route path={paths[4]} element={<LoginPage></LoginPage>}></Route>
        <Route path={paths[5]} element={<Form></Form>}></Route>
        <Route path={paths[6]} element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/storms/:id" element={<StormPage></StormPage>} />
        <Route path="/createstorm/:id" element={<Form />} />
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
