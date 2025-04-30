import { createClient } from "@supabase/supabase-js";
import { BlogPost, Lead } from "../assets/utils/contentType";
import { Database } from "./database";

const supabaseUrl = import.meta.env.VITE_PROJECT_URL!;
const supabaseKey = import.meta.env.VITE_Supabase_API_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);


export async function getBlogsPosts() {

    const { data , error} = await supabase.from("Postblogs").select();

   

    if(error){
        throw new Error(`Error: returned error when fetching blog posts: ${error.message}`)
    }

    const blogPosts : BlogPost[] = data.map(post => {

        const { id, title, summary, img, alt, date } = post;

        
        return {
            id,
            title,
            summary,
            img,
            alt,
            date



        }
    })

    return blogPosts
}

export async function insertPost(Lead : Lead) {
    
    let { error } = await supabase

    .from('Users').insert({
        created_at: Lead.createdAt as any,
        full_name: Lead.fullName,
        email_address: Lead.emailAddress
    });

    if(error){
        throw new Error(`Error ${error.message}`)
    }

}
    