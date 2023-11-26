import { defineConfig } from 'npm:astro/config';
import deno from "npm:@astrojs/deno@4.2.0";

// https://astro.build/config
export default defineConfig({
    adapter: deno(),
    output: 'server',
    url: "https://{vanity}.deno.dev"
});
