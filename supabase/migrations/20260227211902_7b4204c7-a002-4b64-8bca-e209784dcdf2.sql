
CREATE TABLE public.partner_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  empresa TEXT NOT NULL,
  responsavel TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  area_atuacao TEXT,
  tipo_parceria TEXT,
  interesse TEXT,
  mensagem TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.partner_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit partner form"
ON public.partner_submissions
FOR INSERT
WITH CHECK (true);
