import { z } from "zod";

export const patchFormSchema = z.object({
  name: z.string().nonempty("Campo não pode estar vazio"),
  image_url: z
    .string()
    .nonempty("Campo não pode estar vazio")
    .url("Insira uma URL valida"),
  email: z
    .string()
    .email("Insira um e-mail valido")
    .nonempty("Campo não pode estar vazio"),
});

export type TPatchFormValues = z.infer<typeof patchFormSchema>;
