import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// Get Single User
export async function GET(req: Request, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: Number(params.id) },
    });

    return NextResponse.json(user);
}

// Update User
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const body = await req.json();

    const { name, email } = body;

    await prisma.user.update({
        where: {id: Number(params.id) },
        data: { name, email },
    });

    return NextResponse.json({ message: "User Updated" });
}
