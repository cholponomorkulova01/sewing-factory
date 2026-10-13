import cn from "classnames";
import styles from "./OrderStatus.module.css";

export const OrderStatus = ({ text, date }) => {
  return (
    <div
      className={cn(
        "w-full flex justify-center items-center flex-col mb-20",
        styles.orderArrow,
      )}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-500"
      >
        <path
          d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM17.5 25C17.5 29.1421 20.8579 32.5 25 32.5C29.1421 32.5 32.5 29.1421 32.5 25C32.5 20.8579 29.1421 17.5 25 17.5C20.8579 17.5 17.5 20.8579 17.5 25Z"
          fill="#2F60EA"
        />
      </svg>
      <p className={styles.label}>{text}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
};
