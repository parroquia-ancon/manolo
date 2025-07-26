import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const levels = await prisma.level.findMany();
  return NextResponse.json(levels);
}

export async function POST(request: Request) {
  const { name, description, status } = await request.json();
  const level = await prisma.level.create({
    data: { name, description, status },
  });
  return NextResponse.json(level, { status: 201 });
}
