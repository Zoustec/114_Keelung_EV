import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const GAS_BASE_URL =
  "https://script.google.com/macros/s/AKfycbx0GZQ6SscviM3XlYBlBYXK38PlZ1nfU7iXNj1TDIP8V93B0KI9zQzTsSt5L28OkIw3eA/exec";

const useGoogleSheetQuery = (baseUrl = GAS_BASE_URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");



  const refetch = useCallback(async (queryParams = {}, actions = "find") => {
    setLoading(true);
    setError(null);
    try {
      // 建立查詢參數
      const params = new URLSearchParams();
      
      // 加入 action 參數
      params.append('action', actions);
      
      Object.entries(queryParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });

      const url = `${baseUrl}?${params.toString()}`;
      const response = await axios.get(url);
      const result = response.data;

      if (result.status === "200") {
        setData(result.data);
        setStatus(result.status)
      } else {
        setData([]);
        setStatus(result.status)

      }
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [baseUrl, data]); // 添加 data 作為依賴項

  const cleanToinit = useCallback(() => {
    setData(null);
    setError(null);
    setStatus("");
  }, []);

  return {
    data,
    loading,
    error,
    refetch,
    status,
    cleanToinit
  };
};

export default useGoogleSheetQuery;
