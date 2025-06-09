import { createClient } from '@/lib/supabase-server'; // Assuming @ is configured for src
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  try {

    const { error: deleteError, data: deletedData } = await supabase
      .from('waitlist')
      .delete()
      .eq('accepted', false);

    if (deleteError) {
      console.error('Error deleting unaccepted waitlist entries:', deleteError);
      return NextResponse.json({ message: 'Error deleting entries.', error: deleteError.message }, { status: 500 });
    }

    console.log('Successfully deleted unaccepted waitlist entries:', deletedData);
    return NextResponse.json({ ok: true, message: 'Successfully deleted unaccepted waitlist entries.' });
  } catch (error: unknown) {
    console.error('Unexpected error in cron job:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ message: 'An unexpected error occurred.', error: errorMessage }, { status: 500 });
  }
}
