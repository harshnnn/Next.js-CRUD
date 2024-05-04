'use server'

const { createServerComponentClient } = require("@supabase/auth-helpers-nextjs");
const { revalidatePath } = require("next/cache");
const { cookies } = require("next/headers");

export async function addWatch(formData){
    const model= formData.get('model');
    const brand= formData.get('brand');
    const referenceNumber = formData.get('referenceNumber');

    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: ()=> cookieStore});
    const {data :{session}} = await supabase.auth.getSession();
    const user = session?.user

    if(!user){
        console.error("User is not authenticated ");
        return;
    }

    const {data, error} = await supabase
        .from('watches')
        .insert([
            {
            model,
            brand,
            reference_number: referenceNumber,
            user_id: user.id
            }
        ])
    if(error){
        console.error('Error inserting data', error);
        return;
    }    

    
    revalidatePath('/watch-list'); //to clear the cache and revalidating the watch-list page

    return {message: 'Success'}

}

