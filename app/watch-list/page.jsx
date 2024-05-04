import WatchForm from "../components/WatchForm";
import EditWatch from "../components/EditWatch";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { deleteWatch } from "../server-actions/deleteWatch";
export default async function WatchList() {
   const cookieStore = cookies();
   const supabase = createServerComponentClient({ cookies: () => cookieStore })
   const { data: { session } } = await supabase.auth.getSession()
   const user = session?.user;

   const { data: watches, error } = await supabase
      .from('watches')
      .select('*')
      .eq('user_id', user.id)
      .order('brand', { ascending: true })
   if (error) {
      console.error("Error fetching watches");
   }

   console.log(user);
   return (
      <div className="bg-gray-900 text-white min-h-screen">
         <div className="container mx-auto px-4 py-8">
            <div className="bg-gray-800 shadow-md p-6 rounded-lg">
               <h1 className="text-3xl font-bold mb-4">My Watch List</h1>
               <div className="flex justify-end">
                  <form action="/auth/signout" method="post">
                     <div className="flex flex-col">


                        <span>{user.email}</span>
                        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                           Sign Out
                        </button>
                     </div>
                  </form>
               </div>

               <WatchForm className="mt-4" />
               <div className="mt-8">
                  {watches.map((watch) => (
                     <div key={watch.id} className="mb-6">
                        <h2 className="text-xl font-bold">{watch.brand} - {watch.model}</h2>
                        <div className="mt-2 flex items-center">
                           <form action={deleteWatch} className="mr-2">
                              <input type="hidden" name="id" value={watch.id} />
                              <button type="submit" className="text-red-600 hover:text-red-700">
                                 Delete
                              </button>
                           </form>
                           <EditWatch watch={watch} className="text-blue-600 hover:text-blue-700" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>


   )
}