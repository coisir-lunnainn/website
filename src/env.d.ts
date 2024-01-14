/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type ENV = {
  GH_PAT: string;
};

type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;

declare namespace App {
  interface Locals extends Runtime {}
}
