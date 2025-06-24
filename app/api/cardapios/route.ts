import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const cardapios = await prisma.cardapio.findMany();
  return NextResponse.json(cardapios);
}

export async function POST(request: NextRequest) {
  const { diaSemana, tipo, pratoPrincipal, acompanhamento } =
    await request.json();

  const novo = await prisma.cardapio.create({
    data: { diaSemana, tipo, pratoPrincipal, acompanhamento },
  });

  return NextResponse.json(novo, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { id, diaSemana, tipo, pratoPrincipal, acompanhamento } =
    await request.json();

  if (!id) {
    return NextResponse.json(
      { error: "Id obrigatório para atualizar" },
      { status: 400 }
    );
  }

  const atualizado = await prisma.cardapio.update({
    where: { id: Number(id) },
    data: { diaSemana, tipo, pratoPrincipal, acompanhamento },
  });

  return NextResponse.json(atualizado);
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Id obrigatório para deletar" },
      { status: 400 }
    );
  }

  await prisma.cardapio.delete({ where: { id: Number(id) } });

  return NextResponse.json({ message: "Cardápio deletado com sucesso" });
}
