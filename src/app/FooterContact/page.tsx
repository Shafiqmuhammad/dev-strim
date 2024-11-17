'use client';

import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';
import { useEffect, useRef, useState } from 'react';
import { countries } from '../lib/countries';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { saveContactFormAction } from './action';

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

const Contact = () => {
  const [countryISO, setCountryISO] = useState('us')
  const phoneInputRef: any = useRef()

  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    message: Yup.string().required('Required')
  });

  // ipinfo.io (u and p)
  // famita9468@luravel.com
  useEffect(() => {
    fetch(`//ipinfo.io/?token=723e7ae004a34d`)
      .then(function (response) {
        return response.json();
      })
      .then(function (payload: any) {
        console.log(payload)
        !!phoneInputRef?.current && phoneInputRef.current?.setCountry(payload?.country?.toLowerCase() || 'uk');

      }).catch(function (error) {
        console.log(error);
      });

  }, [])

  return (
    <section id="contact" className="overflow-hidden  w-72 py-2 md:py-1 lg:py-1 ">
      <div className="">
        <div className="-mx-4 flex flex-wrap">


          <div className="w-full px-4 lg:w-12/12 xl:w-12/12">
            <div
              className="mb-8 rounded-md bg-primary/[3%] py-1 px-4 dark:bg-dark/50 sm:p-[10px] lg:mb-5 lg:px-2 xl:p-[4px]"
            // data-wow-delay=".15s"
            >
              <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-lg lg:text-lg xl:text-lg">
                Quick Contact
              </h2>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values: ContactFormValues, { setSubmitting, resetForm, setStatus }: FormikHelpers<ContactFormValues>) => {
                  try {
                    const res = await saveContactFormAction(values);
                    console.log('response from server action #####: ', res);
                    setSubmitting(false);
                    if (res.success) {
                      resetForm();
                      setStatus({ success: true });
                    } else {
                      setStatus({ success: false });
                    }
                  } catch (error) {
                    console.error('Error submitting form:', error);
                    setSubmitting(false);
                    setStatus({ success: false });
                  }
                }}
              >
                {({ isSubmitting, setFieldValue, status }) => (
                  <Form>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/1">
                        <div className="mb-2">
                          <label
                            htmlFor="name"
                            className="mb-0 block text-sm font-medium text-dark dark:text-white"
                          >
                            {/* Your Name */}
                          </label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full rounded-sm border border-transparent py-2 px-2 text-base text-body-color placeholder-body-color shadow-md outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          // autoFocus
                          />
                          <ErrorMessage name="name" component="div" className="text-red text-sm" />
                        </div>
                      </div>

                      <div className="w-full px-4 md:w-1/1">
                        <div className="mb-2">
                          <label
                            htmlFor="email"
                            className="mb-0 block text-sm font-medium text-dark dark:text-white"
                          >
                            {/* Your Email */}
                          </label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full rounded-sm border border-transparent py-2 px-2 text-base text-body-color placeholder-body-color shadow-md outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                          <ErrorMessage name="email" component="div" className="text-red text-sm" />
                        </div>
                      </div>

                      <div className="w-full px-4 md:w-1/1">
                        <div className="mb-2">
                          <label
                            htmlFor="phone"
                            className="mb-0 block text-sm font-medium text-dark dark:text-white"
                          >
                            {/* Your Phone */}
                          </label>
                          <PhoneInput
                            ref={phoneInputRef}
                            // defaultCountry={countryISO}
                            value={initialValues.phone}
                            onChange={(phone) => setFieldValue('phone', phone)}
                            inputStyle={{ background: 'transparent', border: 'none', color: '#959cb1' }}
                            countrySelectorStyleProps={{ buttonClassName: "!bg-transparent !border-[#959cb1] !min-w-12" }}
                            name="phone"
                            className='w-full rounded-sm border border-transparent py-2 px-2  text-body-color placeholder-body-color shadow-md outline-none focus:border-primary focus-visible:shadow-none bg-white dark:bg-[#242B51] dark dark:shadow-signUp '
                          />
                          <ErrorMessage name="phone" component="div" className="text-red text-sm" />
                        </div>
                      </div>

                      <div className="w-full px-4 md:w-1/1">
                        <div className="mb-2">
                          <label
                            htmlFor="country"

                            className="mb-0 block text-sm border border-transparent py-2 px-2  font-medium text-dark dark:text-white"
                          >
                            {/* Country */}
                          </label>
                          <Field
                            as="select"
                            name="country"
                            className='w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-md outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp'
                          >
                            <option value={''}>Select country</option>
                            {countries?.map((country, index) => (
                              <option key={index} value={country}>
                                {country}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="country" component="div" className="text-red text-sm" />
                        </div>
                      </div>

                      <div className="w-full px-4">
                        <div className="mb-4">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {/* Your Message */}
                          </label>
                          <Field
                            as="textarea"
                            name="message"
                            rows={3}
                            placeholder="Enter your Message"
                            className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-md outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          />
                          <ErrorMessage name="message" component="div" className="text-red text-sm" />
                        </div>
                      </div>

                      <div className="w-full px-4">
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="rounded-md bg-primary w-full py-2 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                      </div>
                      {!!status && !!status.success && (
                        <div className="w-full px-4">
                          <div className="text-green">Form submitted successfully!</div>
                        </div>
                      )}
                      {!!status && !status.success && (
                        <div className="w-full px-4">
                          <div className="text-red">Form submission failed. Please try again.</div>
                        </div>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
