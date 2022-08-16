import styles from '/styles/Home.module.scss'
import cx from 'classname'
import Layout from '/components/layout/Layout';
import Header from '/components/layout/Header';
import Button from '../components/button/Button';

export default function Index() {
  return (
  <Layout>
    <Header />
    <div>
      <h1 className="pageTitle">BODY</h1>

      <Button name="Button1"></Button>
      <Button name="Button2"></Button>
      <Button name="Button3"></Button>
    </div>
  </Layout>
  );
}