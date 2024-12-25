import { createClient } from "@/utils/supabase/client";

export default async function Test() {
  const supabase = await createClient();
  const { data: random_name } = await supabase.from("random_name").select();

  return <pre>{JSON.stringify(random_name, null, 2)}</pre>;
}
