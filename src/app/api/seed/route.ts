import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 
    await prisma.todo.deleteMany();
    const todo = await prisma.todo.createMany({
        data: [
            { description: 'Piedra del alma', complete: true},
            { description: 'Piedra del Poder'},
            { description: 'Piedra del Tiempo'},
            { description: 'Piedra de la Mente'},
            { description: 'Piedra de la Realidad'},
            { description: 'Piedra del Espacio'},
        ]
    })

  return NextResponse.json({
    message: 'Seed executed',
    todo
  })
}