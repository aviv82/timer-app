import "./Clock.css";

export const Clock = (props) => {
  return (
    <div className="clock">
      <svg
        width="242"
        height="225"
        viewBox="0 0 242 225"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M238 112.5C238 172.154 185.897 221 121 221C56.1033 221 4 172.154 4 112.5C4 52.8465 56.1033 4 121 4C185.897 4 238 52.8465 238 112.5Z"
          stroke="#5869FF"
          strokeWidth="8"
        />
      </svg>

      <h1>00:{props.sec}</h1>
    </div>
  );
};
