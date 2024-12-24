/* @next-codemod-ignore */
import { handleAuth } from '@auth0/nextjs-auth0';

// export async function GET(request: Request) {
//     await handleAuth()(request, );
// }

export const GET = handleAuth();
