import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Text from './components/Text/Text';
import Button from './components/Button/Button';
import styles from './App.module.css';
function App() {
    return (
        <div className={styles.container}>
            <Header />
            <Text>Some text here.</Text>
            <Button>Click me</Button>
            <Footer />
        </div>
    );
}

export default App;

