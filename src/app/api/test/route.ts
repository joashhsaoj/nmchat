// import { createClient } from "@/utils/supabase/client";
// import { type NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const { name, gender, age, location } = await req.json();
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("test")
//     .insert([{ name, gender, age, location }]);

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json(data, { status: 201 });
// }
import { createClient } from "@/utils/supabase/client";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id, name } = await req.json();
  const supabase = await createClient();

  const { data, error } = await supabase.from("female").insert([{ id, name }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
