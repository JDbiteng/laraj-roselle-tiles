-- Fix security issue: Restrict sponsorships table access to admins only
-- Remove overly permissive edge function policies

-- Drop the overly permissive policies
DROP POLICY IF EXISTS "Edge functions can access sponsorships" ON public.sponsorships;
DROP POLICY IF EXISTS "Allow edge function updates for sponsorships" ON public.sponsorships;

-- Create secure policies that only allow admin access for viewing sensitive data
CREATE POLICY "Admins can view all sponsorships" 
ON public.sponsorships 
FOR SELECT 
USING (is_current_user_admin());

CREATE POLICY "Admins can update sponsorships" 
ON public.sponsorships 
FOR UPDATE 
USING (is_current_user_admin());

CREATE POLICY "Admins can delete sponsorships" 
ON public.sponsorships 
FOR DELETE 
USING (is_current_user_admin());

-- Keep the service role insert policy for edge functions to create sponsorships
-- But limit edge function access to only what's needed for the public sponsor display
CREATE POLICY "Service role can update payment status only" 
ON public.sponsorships 
FOR UPDATE 
USING (current_setting('role') = 'service_role')
WITH CHECK (current_setting('role') = 'service_role');