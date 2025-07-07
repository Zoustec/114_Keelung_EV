import React, { useEffect } from "react";
import useGoogleSheetQuery from "../hooks/useGoogleSheetFind";
import { useLocation } from "react-router-dom";

const ReviewAmout = () => {
  const { data, loading, error, refetch } = useGoogleSheetQuery();
  const location = useLocation();

  useEffect(() => {
    refetch({}, "reviewAmount");
    // eslint-disable-next-line
  }, []);

//   if (loading) return <div>載入中...</div>;
  if (error) return <div>發生錯誤</div>;
  if (!data || data.status === "不顯示") return null;

  const isMapRoute = location.pathname === "/map";

  return (
    <div>
      <div>
        <span>總瀏覽人數：</span>
        <span>{data.allReview}</span>
      </div>
      {isMapRoute && (
        <div>
          <span>地圖瀏覽人數：</span>
          <span>{data.mapReview}</span>
        </div>
      )}
    </div>
  );
};

export default ReviewAmout;
