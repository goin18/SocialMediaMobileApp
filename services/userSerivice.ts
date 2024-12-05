import { supabase } from "@/lib/supabase";

export interface UserDataS {
  id: string;
  created_at: string; 
  name: string | null;
  image: string | null; 
  bio: string | null; 
  address: string | null; 
  phoneNumbers: string | null;
}

interface GetUserDataResponse {
  success: boolean;
  msg?: string;
  data?: UserDataS;
}

export const getUserData = async (
  userId: string
): Promise<GetUserDataResponse> => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*") 
      .eq("id", userId)
      .single();

    if (error) {
      return { success: false, msg: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Got Error:", error);
    return { success: false, msg: error.message };
  }
};

export const updateUser = async (
  userId: string,
  data:UserDataS
): Promise<GetUserDataResponse> => {
  try {
    const { error } = await supabase
      .from("users")
      .update(data)
      .eq(`id`, userId)

    if (error) {
      return { success: false, msg: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Got Error:", error);
    return { success: false, msg: error.message };
  }
};
