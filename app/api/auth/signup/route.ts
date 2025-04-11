import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required!" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists!" }, { status: 400 });
    }

    const hashPass = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { name, email, password: hashPass },
    });

    return NextResponse.json({ message: "User created successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
