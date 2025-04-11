import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import crypto from "crypto";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ message: "Email is required!" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({ message: "User not found!" }, { status: 404 });
  }

  const token = crypto.randomBytes(32).toString("hex");

  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      token,
      expiresAt: new Date(Date.now() + 1000 * 60 * 15), // 15 mins
    },
  });

  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${token}`;

  console.log("Reset link:", resetLink);

  return NextResponse.json({ message: "Reset link sent to email!" });
}
