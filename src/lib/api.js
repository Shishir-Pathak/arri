const API_URL = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

export class ApiError extends Error {
  constructor(message, status, fields) {
    super(message);
    this.status = status;
    this.fields = fields || {};
  }
}

function buildUrl(path, params) {
  const url = new URL(`${API_URL}${path}`, window.location.origin);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v === undefined || v === null || v === '' || v === false) continue;
      url.searchParams.set(k, v);
    }
  }
  return url.toString();
}

async function handle(res) {
  const text = await res.text();
  const body = text ? JSON.parse(text) : null;
  if (!res.ok) {
    throw new ApiError(body?.detail ?? `Error ${res.status}`, res.status, body?.errors ?? {});
  }
  return body;
}

export async function get(path, params, { signal } = {}) {
  const res = await fetch(buildUrl(path, params), { headers: { Accept: 'application/json' }, signal });
  return handle(res);
}

export async function postJson(path, payload, { signal } = {}) {
  const res = await fetch(buildUrl(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
    signal,
  });
  return handle(res);
}

export async function postForm(path, formData, { signal } = {}) {
  const res = await fetch(buildUrl(path), {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
    signal,
  });
  return handle(res);
}