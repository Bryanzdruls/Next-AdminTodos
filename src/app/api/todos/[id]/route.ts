import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { time } from 'console';
import { NextResponse, NextRequest } from 'next/server'
import { boolean, object, string } from 'yup';
interface Segments {
    params:{
        id: string;
    }
}

const  validateTodo= (todo:Todo,id:string) =>{
    if (!todo) {
        return NextResponse.json({
            msg: 'There is any todo with the id',
            id
          }, {status:404})
    }
}
export async function GET(request: Request, segments: Segments) { 
    const {id} = segments.params;
    const todo = await prisma.todo.findFirst({where:{id: id}})
    validateTodo(todo!,id);
  
  return NextResponse.json({
    msg: 'Ok',
    todo
  })
}

const putSchema = object({
    description: string().optional(),
    complete: boolean().optional().default(false),//TODO
})
export async function PUT(request: Request, segments: Segments) { 
    const {id} = segments.params;
    const {complete, description}  = await putSchema.validate(await request.json());
    try {
        const todo = await prisma.todo.update({where:{id:id},data:{complete,description}})   
            
        validateTodo(todo!,id);request

        return NextResponse.json({
            msg: 'Ok',
            todo
        })
    } catch (error) {
        return NextResponse.json({
            msg: 'Bad request',
            
        }, {status: 400})
    }    
} 
