import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "All fields are required!" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid Credentials!" }, { status: 400 });
    }

    return NextResponse.json({ message: "Login successful!" }, { status: 200 });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
