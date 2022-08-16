import styles from '/styles/Home.module.scss'
import cx from 'classname'
import Layout from '/components/layout/Layout';
import Header from '/components/layout/Header';
import Button from '../components/button/Button';

export default function Login() {
  return (
  <Layout>
    <Header />
    <div>
      <h1 className="pageTitle">LOGIN</h1>

      <Button name="Login"></Button>
    </div>
  </Layout>
  );
}