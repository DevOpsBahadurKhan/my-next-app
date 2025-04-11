import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return NextResponse.json(users);
}

// Delete User
export async function DELETE(request: Request) {
    const body = await request.json();
    const { id } = body;
  
    await prisma.user.delete({
      where: { id },
    });
  
    return NextResponse.json({ message: "User Deleted" });
  }


  