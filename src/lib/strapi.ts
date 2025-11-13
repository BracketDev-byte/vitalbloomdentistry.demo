// Generic Strapi v4 response shapes
export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiResponse<TData> {
  data: TData;
  meta?: {
    pagination?: StrapiPagination;
    [key: string]: unknown;
  };
}

export interface StrapiEntity<TAttributes> {
  id: number;
  attributes: TAttributes;
}

// Common Strapi upload/media types (partial, only what we need)
export interface StrapiImageFormat {
  url: string;
  width?: number;
  height?: number;
}

export interface StrapiUploadFileAttributes {
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  url: string;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
    [key: string]: StrapiImageFormat | undefined;
  };
}

export type StrapiUploadFile = StrapiEntity<StrapiUploadFileAttributes>;

export interface StrapiRelationSingle<T> {
  data: StrapiEntity<T> | null;
}

export interface StrapiRelationMulti<T> {
  data: Array<StrapiEntity<T>>;
}

// Typed fetch wrapper for Strapi
type QueryParams = Record<string, string | number | boolean | undefined | null>;

export async function strapiFetch<T>(
  path: string,
  opts?: { params?: QueryParams; init?: RequestInit }
): Promise<T> {
  const baseURL = process.env.BACKEND_PUBLIC_BASE_URL;
  if (!baseURL) throw new Error('Missing BACKEND_PUBLIC_BASE_URL env var');

  const url = new URL(path, baseURL);
  if (opts?.params) {
    const usp = new URLSearchParams();
    for (const [key, value] of Object.entries(opts.params)) {
      if (value === undefined || value === null) continue;
      usp.append(key, String(value));
    }
    const qs = usp.toString();
    if (qs) {
      url.search = qs;
    }
  }

  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  const token = process.env.BACKEND_API_TOKEN;
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers,
    ...opts?.init,
  });

  if (!res.ok) {
    let body: unknown = null;
    try {
      body = await res.json();
    } catch {
      body = await res.text().catch(() => null);
    }

    console.error('Strapi fetch error', res.status, body);
    throw new Error(`Strapi error ${res.status}`);
  }

  return (await res.json()) as T;
}

// Helper to safely extract an absolute URL for images (works for absolute or relative Strapi URLs)
export function getStrapiMediaUrl(
  upload: StrapiUploadFile | null | undefined
): string | null {
  if (!upload || !upload.attributes) return null;
  const url = upload.attributes.url;
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const baseURL = process.env.BACKEND_PUBLIC_BASE_URL ?? '';
  return `${baseURL}${url}`;
}
