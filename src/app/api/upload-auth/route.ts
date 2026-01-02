import {getUploadAuthParams} from "@imagekit/next/server";
import {env} from "@/src/env";

export async function GET(){
    try{
        const {token,expire,signature} = getUploadAuthParams({
            privateKey : env.IMAGEKIT_PRIVATE_KEY,
            publicKey : env.IMAGEKIT_PUBLIC_KEY,
        });
        return Response.json({
            token,
            expire,
            signature,
            publicKey:env.IMAGEKIT_PUBLIC_KEY,
            urlEndpoint : env.IMAGEKIT_URL_ENDPOINT,
        });
    }
    catch(error){
        console.error("Upload auth error:",error);
        return Response.json(
            {error:"Failed to generate upload credentials"},
            {status:500},
        );
    }
}

