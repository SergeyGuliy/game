import React from "react";
import styles from "./Field.module.scss";

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

const Field = ({ id, isEmpty, img, select, onTouchStart, onTouchEnd }) => {
  const onMouseDown = e => {
    if (getMobileOperatingSystem() === 'unknown')
      onTouchStart(e)
  }

  const onMouseUp = e => {
    if (getMobileOperatingSystem() === 'unknown')
      onTouchEnd(e)
  }

  return (
    <button
      className={`${!select ? styles.Game_item : styles.Game_item_active} ${
        isEmpty ? styles.Game_empty : ""
      } game-field-${id}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <img
        src={img}
        alt={`game-field-img-${id}`}
        style={{pointerEvents: 'none'}}
      />
    </button>
  );
};

export default Field;
