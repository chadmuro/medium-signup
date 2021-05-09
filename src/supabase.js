import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://itcbbndronlnsgnbbuqv.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDUyMzQ3OCwiZXhwIjoxOTM2MDk5NDc4fQ.b2jmi-pnAIH-3La5swrOxMXnaqkC3YzbEv12xTv2MMw'
);
