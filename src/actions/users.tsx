import { auth } from "@/src/lib/auth";
import {headers} from "next/headers"
import { db } from "@/src/server/db";

export async function getUserCredits(){
    const session = await auth.api.getSession({
        headers : await headers(),
    });
    if(!session)return null;

    const user = await db.user.findUniqueorThrow({
        where : {id:session.user.id},
        select:{credits:true},
    });
    return user.credits;
}

