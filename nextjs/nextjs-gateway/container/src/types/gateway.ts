/**
 * Types for the gateway service and microfrontend communication
 */

export interface MicrofrontendResponse {
  html: string;
  props?: Record<string, unknown>;
  head?: {
    title?: string;
    meta?: Array<{
      name?: string;
      content?: string;
      property?: string;
      [key: string]: string | undefined;
    }>;
    scripts?: Array<{
      src?: string;
      content?: string;
      [key: string]: string | undefined;
    }>;
    links?: Array<{
      rel?: string;
      href?: string;
      [key: string]: string | undefined;
    }>;
  };
  status?: number;
}

export interface MicrofrontendRequestContext {
  path: string;
  query?: Record<string, string | string[]>;
  headers?: Record<string, string>;
} 