import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// GET ?id=... → Obtener proyecto por ID
// POST { walletAddress } → Obtener todos del usuario
// POST { proyecto } → Crear nuevo
// PATCH { id, updates } → Actualizar proyecto

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Falta parámetro 'id'" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("proyectos")
    .select("*, categorias(nombre)")
    .eq("id_categorias", id)
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Leer proyectos del usuario
  if (body.walletAddress) {
    const { data, error } = await supabase
      .from("proyectos")
      .select("*")
      .eq("id_usuario", body.walletAddress);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  }

  // Crear nuevo proyecto
  if (body.proyecto) {
    const { proyecto } = body;

    if (!proyecto.titulo || !proyecto.id_usuario) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios (titulo, id_usuario)" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("proyectos").insert([proyecto]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { error: "Datos inválidos en POST" },
    { status: 400 }
  );
}

export async function PATCH(req: NextRequest) {
  const { id, updates } = await req.json();

  if (!id || !updates) {
    return NextResponse.json(
      { error: "Faltan 'id' o 'updates'" },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("proyectos")
    .update(updates)
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
