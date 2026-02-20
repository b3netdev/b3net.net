import { useState } from 'react';
import { API } from '../api/apiconfig';

const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const submitContact = async (payload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await API.post('contact/submit', payload);

    setSuccess(true);
      return response;

    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Something went wrong"
      );
      return null;

    } finally {
      setLoading(false);
    }
  };

  return {
    submitContact,
    loading,
    success,
    error
  };
};

export default useContact;
