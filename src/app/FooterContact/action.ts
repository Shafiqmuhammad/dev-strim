'use server';
import pool from '../lib/db';
import { headers } from "next/headers";

// async function insert(data: any) {
//     // try {
//     const client = await pool.connect();

//     const result = await client.query("INSERT INTO contact (name, email, phone, country, message, meta) VALUES ($1, $2, $3, $4, $5, $6);", [data?.name, data?.email, data?.phone, data?.country, data?.message, { ip: headers().get("x-forwarded-for") }]);
//     client.release();
//     console.log('Contact data added successfully'); // Log success
//     console.log(result)
//     return result;
//     // } catch (error) {
//     //     console.error('Error adding contact info:', error);
//     // }
// }

// export const saveContactFormAction = async (data: any) => {
//     // this is server action to save data to database or send email to user with data from form
//     try {
//         await insert(data);
//         return { success: true, message: "You are successfully submitted", data: data }
//     } catch (error) {
//         console.log(error)
//         console.log('server data @@@@@: ', data);
//     }

//     return { success: false, message: "Something went wrong", data: data }
// }







async function insert(data: any) {
    // try {
    const client = await pool.connect();

    const result = await client.query("INSERT INTO contact (name, email, phone, country, message, meta) VALUES ($1, $2, $3, $4, $5, $6);", [data?.name, data?.email, data?.phone, data?.country, data?.message, { ip: headers().get("x-forwarded-for") }]);
    client.release();
    console.log('Contact data added successfully'); // Log success
    console.log(result)
    return result;
    // } catch (error) {
    //     console.error('Error adding contact info:', error);
    // }
}

export const saveContactFormAction = async (data: any) => {
    // this is server action to save data to database or send email to user with data from form 
    try {
        await insert(data);
        return { success: true, message: "You are successfully submitted", data: data }
    } catch (error) {
        console.log(error)
        console.log('server data @@@@@: ', data);
    }

    return { success: false, message: "Something went wrong", data: data }
}