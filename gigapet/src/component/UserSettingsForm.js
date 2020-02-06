import React from 'react';
import { Form, Formik, Field } from 'formik';
import Button from './Button';

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
                <label>Nuts: <input id='nutAllergy' type='checkbox' /></label>
                <label>Eggs: <input id='eggAllergy' type='checkbox' /></label>
                <label>Dairy: <input id='dairyAllergy' type='checkbox' /></label>
                <Button />
            </Form>
      </Formik>
    )
}