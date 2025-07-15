import React, { useEffect } from "react";
import useGoogleSheetQuery from "../hooks/useGoogleSheetFind";

const ReviewAmout = () => {
  const { data, loading, error, refetch } = useGoogleSheetQuery();

  useEffect(() => {
    refetch({}, "reviewAmount");
    // eslint-disable-next-line
  }, []);

  if (error) return null;
  if (!data || data.status === "不顯示") return null;


  return (
    <div>
      <div>
        <span>瀏覽人次：</span>
        <span>{data.allReview}</span>
      </div>

    </div>
  );
};

export default ReviewAmout;
