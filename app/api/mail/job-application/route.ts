import { NextResponse } from "next/server";

// Handle GET request
export async function GET() {
  return NextResponse.json({ message: "Hello, API from Next.js App Router!" });
}

// Handle POST request
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    console.log("Received form data:", formData);
    const file = formData.get("file") as File | null;
    const text = formData.get("text") as string | null;

    if (!file || !text) {
      return NextResponse.json({ error: "File or text missing" }, { status: 400 });
    }

    // Baca file sebagai buffer (jika perlu menyimpannya)
    const fileBuffer = await file.arrayBuffer();

    console.log("Received text:", text);
    console.log("Received file:", file.name, "Size:", file.size);

    return NextResponse.json({
      message: "File and text uploaded successfully",
      fileName: file.name,
      receivedText: text,
    });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
