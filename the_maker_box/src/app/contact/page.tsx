"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import team from "/public/team1.jpg";

interface PostData {
  id: number;
  title: string;
  desc: string;
  username: string;
  img: string;
  content: string;
}

async function getData(id: string): Promise<PostData> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // Throw an error for proper error handling
  }

  return res.json();
}

function MomentPost({ params }: { params: { id: string } }) {
  const [data, setData] = useState<PostData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const postData = await getData(params.id);
        setData(postData);
      } catch (error) {
        // Handle errors, e.g., show an error message or redirect to a 404 page.
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [params.id]);

  if (!data) {
    // You can return a loading indicator here
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={team} // Make sure this path is correct
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={team} // Make sure this path is correct
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
}

export default MomentPost;
