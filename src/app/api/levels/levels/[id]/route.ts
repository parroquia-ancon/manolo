import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const level = await prisma.level.findUnique({ where: { id: +params.id } });
  return NextResponse.json(level);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const updated = await prisma.level.update({
    where: { id: +params.id },
    data,
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.level.delete({ where: { id: +params.id } });
  return NextResponse.json(null, { status: 204 });
}
