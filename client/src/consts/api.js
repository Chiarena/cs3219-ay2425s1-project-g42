/**
 * API endpoint ports.
 */

// gets from .env
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost";

export const SVC_PORTS = {
  user: 3001,
  question: 3002,
  matching: 3003,
  history: 3007
};

// automatically generated from SVC_PORTS
export const SVC_ENDPOINTS = Object.fromEntries(
  Object.entries(SVC_PORTS).map(([k, v], i) => [k, `${API_BASE_URL}:${v}`])
);
