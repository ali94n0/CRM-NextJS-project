import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Card({ data }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch(`/api/customer/${data._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (result.status === "success") {
      router.reload();
    }
  };

  return (
    <div className="card">
      <div className="card__details">
        <p>
          {data.name} {data.lastName}
        </p>
        <p>{data.email}</p>
      </div>
      <div className="card__buttons">
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${data._id}`}>Edit</Link>
        <Link href={`/customers/${data._id}`}>Details</Link>
      </div>
    </div>
  );
}

export default Card;
