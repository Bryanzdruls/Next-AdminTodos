import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import { boolean, object, string} from 'yup';

export async function GET(request: Request) { 
    const {searchParams } = new URL(request.url);
    const take = searchParams.get('take') ?? '10';
    const skip = searchParams.get('skip') ?? '0';

    if(isNaN(Number.parseInt(take))) {
        return NextResponse.json({
            message: 'Take value is nor a number',
            take
        }, {status:400})
    }
    if(isNaN(Number.parseInt(skip))) {
        return NextResponse.json({
            message: 'Take value is nor a number',
            skip
        }, {status:400})
    }
    const todos = await prisma.todo.findMany({
        take: Number.parseInt(take),
        skip: Number.parseInt(skip),
        
    });
  return NextResponse.json({
    message: 'Ok',
    todos
  })
    
}
const postSchema = object({
    description: string().required(),
    complete: boolean().optional().default(false),//TODO
})

export async function POST(request: Request) { 
    try {
        
        const {complete, description}  = await postSchema.validate(await request.json());
        const todo = await prisma.todo.create({data:{complete, description}});
        return NextResponse.json({
            message: 'Ok',
            todo
          })   
    } catch (error) {
        return NextResponse.json({
            message: 'Error',
            error
          }, {status:500})      
    }


}

export async function DELETE(request: Request) { 
     try {
         
         const todos = await prisma.todo.deleteMany({
            where:{complete:true}
        })
        return NextResponse.json({
            msg: 'Ok',
            todos
        })
     } catch (error) {
        
        return NextResponse.json({
            msg: 'Ok',
        },{status: 500})
     }
} 