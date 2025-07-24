export const OFFLINE_KEY = 'offlineFormSubmissions';

export function saveFormOffline(data: any) {
  const stored = JSON.parse(localStorage.getItem(OFFLINE_KEY) || '[]');
  stored.push(data);
  localStorage.setItem(OFFLINE_KEY, JSON.stringify(stored));
}

export function getOfflineForms(): any[] {
  return JSON.parse(localStorage.getItem(OFFLINE_KEY) || '[]');
}

export function clearOfflineForms() {
  localStorage.removeItem(OFFLINE_KEY);
}
