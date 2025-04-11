import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { token, newPassword } = body;

  if (!token || !newPassword) {
    return NextResponse.json({ message: "Invalid data!" }, { status: 400 });
  }

  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { token },
  });

  if (!resetToken || resetToken.expiresAt < new Date()) {
    return NextResponse.json({ message: "Token expired or invalid!" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: resetToken.userId },
    data: { password: newPassword },
  });

  await prisma.passwordResetToken.delete({ where: { token } });

  return NextResponse.json({ message: "Password reset successfully!" });
}
