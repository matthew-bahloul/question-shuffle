// app/api/images/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagesDir = path.join(process.cwd(), 'public/images');
  const filenames = await fs.promises.readdir(imagesDir);
  return NextResponse.json({ filenames });
}