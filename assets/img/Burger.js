import React from "react";
import styles from "./Burger.module.scss";

// import styled from "styled-components";

// const StyledBurger = styled.button`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 30px;
//   height: 30px;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10000;
//   &:focus {
//     outline: none;
//   }

//   div {
//     height: 2px;
//     border: 1px solid #004236;
//     background: #004236;
//     border-radius: 100px;
//     transition: all 0.5s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transition: all 0.5s linear;
//       width: ${({ open }) => (open ? "30px" : "20px")};
//       top: ${({ open }) => (open ? "-5px" : "8px")};
//       left: ${({ open }) => (open ? "0px" : "10px")};
//       transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
//     }

//     :nth-child(2) {
//       height: 2px;
//       width: 30px;
//       transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
//     }
//   }
// `;

// const Burger = ({ open }) => {
//   return (
//     <StyledBurger open={open}>
//       <div />
//       {/* <div /> */}
//       <div />
//     </StyledBurger>
//   );
// };
// export default Burger;

export default function Burger({ open, fill = "#004236" }) {
  const computedImg = () => {
    if (!open) {
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.BurgerClose}
        >
          <path
            d="M10.8333 11.8334C10.8333 11.2811 11.281 10.8334 11.8333 10.8334H29C29.5523 10.8334 30 11.2811 30 11.8334C30 12.3857 29.5523 12.8334 29 12.8334H11.8333C11.281 12.8334 10.8333 12.3857 10.8333 11.8334Z"
            fill={fill}
          />
          <path
            d="M0 18.5C0 17.9478 0.447715 17.5 1 17.5H29C29.5523 17.5 30 17.9478 30 18.5C30 19.0523 29.5523 19.5 29 19.5H1C0.447716 19.5 0 19.0523 0 18.5Z"
            fill={fill}
          />
        </svg>
      );
    } else {
      return (
        <svg
          className={styles.BurgerOpen}
          width="25"
          height="25"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.58211 0.707322C2.19158 0.316798 1.55842 0.316798 1.16789 0.707322C0.777369 1.09785 0.777369 1.73101 1.16789 2.12153L14.0465 15.0002L1.16796 27.8787C0.777439 28.2692 0.777438 28.9024 1.16796 29.2929C1.55849 29.6835 2.19165 29.6835 2.58218 29.2929L15.4607 16.4144L27.8787 28.8323C28.2692 29.2229 28.9024 29.2229 29.2929 28.8323C29.6834 28.4418 29.6834 27.8087 29.2929 27.4181L16.8749 15.0002L29.293 2.58212C29.6835 2.1916 29.6835 1.55843 29.293 1.16791C28.9025 0.777385 28.2693 0.777384 27.8788 1.16791L15.4607 13.5859L2.58211 0.707322Z"
            fill={fill}
          />
        </svg>
      );
    }
  };
  return <div className={styles.Burger}>{computedImg()}</div>;
}
