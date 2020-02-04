import React from 'react';
import { Form, Formik, Field } from 'formik';
import Button from './Button';
import './App.css';

export default function UserSettingsForm() {
    return (
      <Formik>
            <Form className='settings-form'>

                <Field className='select' component='select' name='child'>
                  <option>Choose a child</option>
                  <option>Child 1</option>
                  <option>Child 2</option>
                </Field>

                <h3>Allergies</h3>
                <label>Check all that apply:</label>

                <label>Nuts
                    <Field type='checkbox'></Field>
                </label>
                <label>Eggs
                    <Field type='checkbox'></Field>
                </label>
                <label>Dairy
                    <Field type='checkbox'></Field>
                </label>

                <Button />
            </Form>
      </Formik>
    )
}