"use client";
import React from "react";
import styles from "./_components/NewsCard/NewsCard.module.scss";

const Loading: React.FC = () => {
  return <div className={`${styles.newsCard} ${styles.newsCard_unloaded}`}></div>;
};

export default Loading;
