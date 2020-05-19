import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Formik} from 'formik';
import {Input, SubmitButton, Form} from 'formik-antd';
import {notification} from 'antd';
import {AntDesignOutlined} from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div style={{background: 'white', padding: '20px'}}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            topic: '',
            description: '',
          }}
          onSubmit={(values, f) => {
            notification.info({message: values.name});
            f.setSubmitting(false);
          }}
        >
          <Form>
            <Input name="name" />
            <SubmitButton style={{marginTop: 10}} icon={<AntDesignOutlined />}>
              Submit
            </SubmitButton>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default App;
