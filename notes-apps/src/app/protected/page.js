import { auth } from '@/auth';
import { logout } from '@/lib/actions';
import { Button } from '@/components/ui/button';

export async function Protected(){
    const session = await auth();

    session?.user?.email;

    return (
        <form
        action = {logout}
        className='h-screen w-screen flex flex-col justify-center items-center gap-10'
        >
            <div>
                <p className='text-white'>{session?.user?.email}</p>
            </div>
            <button type='submit' className='px-3 py-2'>
                logout
            </button>
        </form>
    )
}