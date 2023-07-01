import React, { useState, useEffect } from "react";

const DigitalWatch = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="flex justify-center items-center gap-4 text-[#ff0000] font-bold">
      <div className="font-lg text-center flex-shrink-0 w-[180px]">
        {formatDate(dateTime)}
      </div>
      <div className="font-lg text-center flex-shrink-0 w-[50px]">
        {formatTime(dateTime)}
      </div>
    </div>
  );
};

export default DigitalWatch;
