// components/ContactForm.tsx
"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';

const AddContactData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const router = useRouter();
  const path = usePathname();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contactapi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log('Contact info added successfully');
        setFormData({ name: '', email: '', contact: '', message: '' });
        router.refresh();
        router.replace(path);
      } else {
        console.error('Failed to add data');
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Al Hamid Minerals</title>
        <meta name="description" content="Get in touch with Al Hamid Minerals for any inquiries or questions about our minerals and services." />
        <meta name="keywords" content="Al-Hamid-Minerals, contact, inquiries, minerals, services" />
      </Head>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto w-full p-4">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block mb-2 text-white">Contact No</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-white">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-transparent hover:bg-white text-blue-700 font-semibold hover:text-lightgrey hover:border-black py-2 px-4 border border-white hover:border-transparent rounded">
          Send
        </button>
      </form>
    </>
  );
};

export default AddContactData;
















// // components/ContactForm.tsx
// "use client"
// import { usePathname, useRouter } from 'next/navigation';
// import React, { useState } from 'react';
// const AddContactData = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact:'',
//     message: '',
    
//   });
//   const router = useRouter();
//   const path = usePathname()

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//         ...prevState,
//         [name]: value,
//     }));
// };
//   const handleSubmit = async (e: any) => {
//   e.preventDefault();
//   try {
//     const response = await fetch('/api/contactapi', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     });
// console.log(response);


//     if (response.ok) {
//       console.log('Contact info added successfully');
//       setFormData({ name:'' , email:'', contact: '', message: '' });
//       router.refresh();
//       router.replace(path)
//   } else {
//       console.error('Failed to add data');
//   }
// } catch (error) {
//   console.error('Error adding data:', error);
// }
// };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto w-full ">
//       <div className="mb-4">
//         <label htmlFor="name" className="block mb-2 text-white">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
//           required
//         />
//       </div>
      
//       <div className="mb-4">
//         <label htmlFor="email" className="block mb-2 text-white">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
//           required
//         />
//       </div>



        
//       <div className="mb-4">
//         <label htmlFor="contact" className="block mb-2 text-white">Contact No</label>
//         <input
//           // type="text"
//           id="contact"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
//           required
//         />
//       </div>




//       <div className="mb-4">
//         <label htmlFor="message" className="block mb-2 text-white">Message</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows={4}
//           className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
//           required
//         ></textarea>
//       </div>
//       <button type="submit" className="bg-transparent text-white hover:bg-blue-900 text-blue-700 font-semibold hover:text-lightgrey hover:border-black py-2 px-4 border border-white hover:border-transparent rounded">
//   Send
// </button>

      
//     </form>
//   );
// };

// export default AddContactData;
