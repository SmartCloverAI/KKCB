export function resolveServedByHostId(
  requestHostId: string | null,
  fallbackHostId?: string
) {
  return requestHostId ?? fallbackHostId ?? "unknown";
}
