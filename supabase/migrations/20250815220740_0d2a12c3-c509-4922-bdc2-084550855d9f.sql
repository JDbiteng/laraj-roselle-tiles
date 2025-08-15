-- Fix security issue: Remove sensitive data from public sponsors function
-- This removes email addresses and other sensitive info from public access
CREATE OR REPLACE FUNCTION public.get_public_sponsors()
 RETURNS TABLE(id uuid, event_id uuid, sponsor_name text, company_name text, amount numeric, website text, message text, created_at timestamp with time zone, event_name text)
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
    SELECT 
        s.id,
        s.event_id,
        s.sponsor_name,
        s.company_name,
        s.amount,
        s.website,
        s.message,
        s.created_at,
        e.name as event_name
    FROM public.sponsorships s
    INNER JOIN public.events e ON s.event_id = e.id
    WHERE s.payment_status = 'completed'
    ORDER BY s.amount DESC;
$function$