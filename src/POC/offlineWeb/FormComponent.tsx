import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  saveFormOffline,
  getOfflineForms,
  clearOfflineForms,
} from './offlineUtils';

interface FormData {
  name: string;
  email: string;
}

const fakeApiSubmit = (data: FormData): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (navigator.onLine) {
      console.log('✅ Submitted to API:', data);
      setTimeout(resolve, 1000);
    } else {
      reject('Offline');
    }
  });
};

export const FormComponent: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (navigator.onLine) {
      try {
        await fakeApiSubmit(data);
        alert('Form submitted successfully!');
      } catch (error) {
        saveFormOffline(data);
        alert('You are offline. Form saved locally.');
      }
    } else {
      saveFormOffline(data);
      alert('You are offline. Form saved locally.');
    }
    reset();
  };

  const syncOfflineData = async () => {
    const offlineData = getOfflineForms();
    for (const entry of offlineData) {
      try {
        await fakeApiSubmit(entry);
      } catch {
        console.log('Still offline...');
        return;
      }
    }
    if (offlineData.length) {
      clearOfflineForms();
      alert('✅ Offline data synced successfully!');
    }
  };

  useEffect(() => {
    window.addEventListener('online', syncOfflineData);
    return () => window.removeEventListener('online', syncOfflineData);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 20 }}>
      <h2>Offline Form</h2>
      <div>
        <label>Name:</label>
        <input {...register('name', { required: true })} />
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: true })} />
      </div>
      <button type="submit">Submit</button>
      <p>Status: {navigator.onLine ? '🟢 Online' : '🔴 Offline'}</p>
    </form>
  );
};
